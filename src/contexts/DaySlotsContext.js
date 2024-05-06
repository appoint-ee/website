import React, {createContext, useContext, useEffect, useState} from 'react';

import { format } from 'date-fns';

import { url } from '../constants/environment';
import { common } from "../constants/common";

import { UserContext } from "./UserContext";

const DaySlotsContext = createContext();

const DaySlotsProvider = ({children}) => {
    const [ daySlots, setDaySlots ] = useState([]);

    const { user } = useContext(UserContext);

    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    useEffect(() => {
        if (user.accessToken) {
            const fetchData = async () => {
                const daySlotsData = await fetch(url.appointeeApi + `/slots/day?start=${format(firstDay, common.dateFormat)}&end=${format(lastDay, common.dateFormat)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + user.accessToken
                    }
                });

                if (!daySlotsData.ok) {
                    throw new Error('An error was encountered during the authentication process!');
                }

                setDaySlots(await daySlotsData.json())
            }

            fetchData();
        }
    }, [user]);

    return (
        <DaySlotsContext.Provider
            value={{
                daySlots,
                setDaySlots,
            }}
        >
            {children}
        </DaySlotsContext.Provider>
    );
};

export { DaySlotsContext, DaySlotsProvider };
