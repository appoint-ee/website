import React, {createContext, useContext, useEffect, useState} from 'react';

import { UserContext } from "./UserContext";

import { url } from "../constants/environment";

import { common } from "../constants/common";

import { format } from "date-fns";

const TimeSlotsContext = createContext();

const TimeSlotsProvider = ({ children }) => {
    const [timeSlots, setTimeSlots] = useState([]);

    const {user} = useContext(UserContext);

    const today = new Date(); // TODO: Get selected day from Picker.js
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    useEffect(() => {
        if (user.accessToken) {
            const fetchData = async () => {
                const timeSlotsData = await fetch(url.appointeeApi + `/slots/time?start=${format(today, common.dateFormat)}&end=${format(tomorrow, common.dateFormat)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + user.accessToken
                    }
                });

                if (!timeSlotsData.ok) {
                    throw new Error('An error was encountered during the authentication process!');
                }
                
                setTimeSlots(await timeSlotsData.json())
            }

            fetchData();
        }
    }, [user]);
    
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
