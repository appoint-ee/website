import React, { createContext, useEffect, useContext, useState } from 'react';

import { format } from 'date-fns';
import { isEmpty } from 'lodash';

import useSlotApi from '../api/slot';

import { BookingContext } from './BookingContext';
import { UserContext } from './UserContext';

import dateConstants from '../constants/date';

const TimeSlotsContext = createContext();

const TimeSlotsProvider = ({ children }) => {
    // #region State definition
    const slotApi = useSlotApi();

    const { state } = useContext(BookingContext);
    const { getOperableUser } = useContext(UserContext);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ timeSlots, setTimeSlots ] = useState([]);
    // #endregion

    // #region Life cycle
    const { accessToken, userName } = getOperableUser();

    useEffect(() => {
        if (!isEmpty(accessToken)) {
            if (state.selectedDate) {
                setIsLoading(true);

                const tomorrow = new Date(state.selectedDate.getFullYear(), state.selectedDate.getMonth(), state.selectedDate.getDate() + 1);
                slotApi
                    .getTime(userName, format(state.selectedDate, dateConstants.format), format(tomorrow, dateConstants.format))
                    .then(response => {
                        setTimeSlots(response);
                        setIsLoading(false);
                    });
            }
            else {
                setTimeSlots([]);
            }
        }
    }, [accessToken, state.selectedDate]);
    // #endregion
    
    return (
        <TimeSlotsContext.Provider
            value={{
                isLoading,
                timeSlots,
                setTimeSlots,
            }}
        >
            {children}
        </TimeSlotsContext.Provider>
    );
};

export { TimeSlotsContext, TimeSlotsProvider };
