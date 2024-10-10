import React, { useContext } from 'react';

import { isEmpty } from 'lodash';

import { styled } from '@mui/system';

import PickerCard from '../cards/Picker';
import SlotsCard from '../cards/Slots';
import InfoCard from '../cards/Info';

import BookingForm from './BookingForm';

import { TimeSlotsProvider } from '../../contexts/TimeSlotsContext';
import { DaySlotsProvider } from '../../contexts/DaySlotsContext';
import { BookingProvider } from '../../contexts/BookingContext';
import { UserContext } from '../../contexts/UserContext';

import componentStyles from '../../styles/components/componentStyles';

// #region Styled Components
const Body = styled('div')(componentStyles.slidingBody);
const Separator = styled('div')(componentStyles.separator);
// #endregion

const Booking = () => {
    // #region State definition
    const { user } = useContext(UserContext);
    // #endregion
    
    // #region Component definition
    const bodyProps = {
        className: isEmpty(user) ? 'initial' : 'open',
    };
    // #endregion

    return (
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
    );
}

export default Booking;
