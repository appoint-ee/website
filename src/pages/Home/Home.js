import React, { useContext } from 'react';

import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import PickerCard from '../../components/cards/Picker';
import SlotsCard from '../../components/cards/Slots';
import InfoCard from '../../components/cards/Info';

import BookingForm from '../../components/home/BookingForm';

import { TimeSlotsProvider } from '../../contexts/TimeSlotsContext';
import { DaySlotsProvider } from '../../contexts/DaySlotsContext';
import { BookingProvider } from '../../contexts/BookingContext';
import { UserContext } from '../../contexts/UserContext';

import { redirectToGoogleAuth } from '../../utils/tools/3rdParty';

import homeStyles from '../../styles/pages/homeStyles';

// #region Styled Components
const MainContainer = styled('div')(homeStyles.mainContainer);

const Title = styled('p')(homeStyles.title);
const Action = styled('span')(homeStyles.action);

const Body = styled('div')(homeStyles.body);
const SlotCreator = styled(Body)(homeStyles.slotCreator);
const Separator = styled('div')(homeStyles.separator);
// #endregion

const Home = () => {
    // #region State definition
    const { user, appointeeUser } = useContext(UserContext);
    // #endregion
    
    // #region Component definition
    const actionProps = {
        onClick: () => redirectToGoogleAuth(),
    };
    const bodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
        <MainContainer>
            {
                isEmpty(appointeeUser) && (
                    <React.Fragment>
                        <Title>
                            Hemen kendi takvmini yarat ve appointment almaya <Action {...actionProps}>başla!</Action>
                        </Title>
                        <SlotCreator {...bodyProps}>
                            <div style={{ flexGrow: 1, backgroundColor: 'red' }}>
                                Slot oluşturma
                            </div>
                            <div style={{ flexGrow: 1, backgroundColor: 'blue' }}>
                                Slot oluşturma
                            </div>
                        </SlotCreator>
                    </React.Fragment>
                )
            }
            {
                !isEmpty(appointeeUser) && (
                    <BookingProvider>
                        <DaySlotsProvider>
                            <TimeSlotsProvider>
                                <Body {...bodyProps}>
                                    <InfoCard />
                                    <Separator />
                                    <PickerCard />
                                    <Separator />
                                    <SlotsCard />
                                </Body>
                                <BookingForm />
                            </TimeSlotsProvider>
                        </DaySlotsProvider>
                    </BookingProvider>
                )
            }
        </MainContainer>
    );
}

export default Home;
