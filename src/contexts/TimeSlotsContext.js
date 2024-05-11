import React, {createContext, useEffect, useState} from 'react';

import { format } from 'date-fns';

import useSlotApi from '../api/slot';

import { common } from '../constants/common';

const TimeSlotsContext = createContext();

const TimeSlotsProvider = ({ children }) => {
    // #region State definition
    const { getTime } = useSlotApi();
    const [timeSlots, setTimeSlots] = useState([]);
    // #endregion

    // #region Life cycle
    useEffect(() => {
        const fetchData = async () => {
            const today = new Date(); // TODO: Get selected day from Picker.js
            const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

            const apiResponse = await getTime(format(today, common.dateFormat), format(tomorrow, common.dateFormat));
            setTimeSlots(apiResponse);
        }

        fetchData();
    }, [getTime]);
    // #endregion
    
    return (
        <TimeSlotsContext.Provider
            value={{
                timeSlots,
                setTimeSlots,
            }}
        >
            {children}
        </TimeSlotsContext.Provider>
    );
};

export { TimeSlotsContext, TimeSlotsProvider };
