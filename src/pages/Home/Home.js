import React, { useContext } from 'react';

import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import InfoCard from '../../components/cards/Info';
import PickerCard from '../../components/cards/Picker';
import SlotsCard from '../../components/cards/Slots';

import BookingForm from '../../components/home/BookingForm';

import { UserContext } from '../../contexts/UserContext';
import { BookingProvider } from '../../contexts/BookingContext';

import { redirectToGoogleAuth } from '../../utils/tools/3rdParty';

import homeStyles from '../../styles/pages/homeStyles';

// #region Styled Components
const MainContainer = styled('div')(homeStyles.mainContainer);

const Title = styled('p')(homeStyles.title);
const Start = styled('span')(homeStyles.start);

const PickerBody = styled('div')(homeStyles.pickerBody);
const Separator = styled('div')(homeStyles.separator);
// #endregion

const Home = () => {
    // #region State definition
    const { user } = useContext(UserContext);
    // #endregion
    
    // #region Component definition
    const startProps = {
        onClick: () => redirectToGoogleAuth(),
    };
    const pickerBodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
        <BookingProvider>
            <MainContainer>
                <Title>
                    Hemen kendi takvmini yarat ve appointment almaya <Start {...startProps}>başla!</Start>
                </Title>
                <PickerBody {...pickerBodyProps}>
                    <InfoCard />
                    <Separator />
                    <PickerCard />
                    <Separator />
                    <SlotsCard />
                </PickerBody>
                <BookingForm />
            </MainContainer>
        </BookingProvider>
    );
}

export default Home;
