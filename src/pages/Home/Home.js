import React, { useContext } from 'react';

import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import InfoCard from '../../components/cards/Info';
import PickerCard from '../../components/cards/Picker';
import SlotsCard from '../../components/cards/Slots';

import BookingForm from '../../components/home/BookingForm';

import { UserContext } from '../../contexts/UserContext';
import { BookingProvider } from '../../contexts/BookingContext';
import { DaySlotsProvider } from '../../contexts/DaySlotsContext';
import { TimeSlotsProvider } from '../../contexts/TimeSlotsContext';

import { redirectToGoogleAuth } from '../../utils/tools/3rdParty';

import homeStyles from '../../styles/pages/homeStyles';

// #region Styled Components
const MainContainer = styled('div')(homeStyles.mainContainer);

const Title = styled('p')(homeStyles.title);
const Start = styled('span')(homeStyles.start);

const Body = styled('div')(homeStyles.body);
const Separator = styled('div')(homeStyles.separator);
// #endregion

const Home = () => {
    // #region State definition
    const { user, appointeeUser } = useContext(UserContext);
    // #endregion
    
    // #region Component definition
    const startProps = {
        onClick: () => redirectToGoogleAuth(),
    };
    const bodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
        <MainContainer>
            {
                // If user is not logged in and not on home page, i.e., appointeeUser is empty,
                isEmpty(user) && isEmpty(appointeeUser) && (
                    <Title>
                        Hemen kendi takvmini yarat ve appointment almaya <Start {...startProps}>başla!</Start>
                    </Title>
                )
            }
            {
                // If user is not logged in and not on home page, i.e., appointeeUser is empty,
                !isEmpty(user) && isEmpty(appointeeUser) && (
                    "Slot oluşturma"
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
