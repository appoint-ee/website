import React, { createContext, useContext, useEffect, useState } from 'react';

import { format } from 'date-fns';
import { isEmpty } from 'lodash';

import useSlotApi from '../api/slot';

import { BookingContext } from './BookingContext';
import { UserContext } from './UserContext';

import dateConstants from '../constants/date';

const DaySlotsContext = createContext();

const DaySlotsProvider = ({ children }) => {
    // #region State definition
    const slotApi = useSlotApi();

    const { state } = useContext(BookingContext);
    const { appointeeUser } = useContext(UserContext);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ daySlots, setDaySlots ] = useState([]);
    // #endregion
    
    // #region Life cycle

    useEffect(() => {
        if (!isEmpty(appointeeUser)) {
            setIsLoading(true);

            const selectedYear = state.selectedMonth.getFullYear();
            const selectedMonth = state.selectedMonth.getMonth();
    
            const firstDay = new Date(selectedYear, selectedMonth, 1);
            const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
    
            slotApi
                .getDay(appointeeUser.userName, format(firstDay, dateConstants.format), format(lastDay, dateConstants.format))
                .then(response => {
                    setDaySlots(response);
                    setIsLoading(false);
                });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(appointeeUser), state.selectedMonth, slotApi]);
    // #endregion

    return (
        <DaySlotsContext.Provider
            value={{
                isLoading,
                daySlots,
                setDaySlots,
            }}
        >
            {children}
        </DaySlotsContext.Provider>
    );
};

export { DaySlotsContext, DaySlotsProvider };
