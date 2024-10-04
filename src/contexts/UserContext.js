/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import usePeopleApi from '../api/people';
import { authorize as authorizeGoogle } from '../api/google';

import { url, googleApi } from '../constants/environment';

const UserContext = createContext();

//  user -> logged in user
//  appointeeUser -> Domain user
const UserProvider = ({ children }) => {
    // #region State definition
    const location = useLocation();
    const peopleApi = usePeopleApi();

    const [user, setUser] = useState(null);
    const [appointeeUser, setAppointeeUser] = useState(null);
    // #endregion

    // #region Component definition
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    // #endregion

    const domainName = window.location.hostname.replace("." + url.appointeeWeb, "");

    // #region Life cycle
    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (!!localUser) {
            setUser(JSON.parse(localUser));
        }

        if (domainName !== url.appointeeWeb) {
            // TODO: getUserByUserName
            // TODO: getUserByUserName sonucu null ise anasayfaya yönlendir.
            const newAppointeeUser = {
                avatar: undefined,
                name: "Reçep Çil",
                description: "Handsome boy",
                address: "Tallinn",
                emailAddress: "rchil@appoint.ee",
                phoneNumber: "555 444 33 22",
                userName: domainName
            };
            setAppointeeUser(newAppointeeUser);
        }
    }, []);

    useEffect(() => {
        if (!!user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);
    
    useEffect(() => {
        if (!!code) {
            const fetchData = async () => {
                const params = new URLSearchParams({
                    ...googleApi,
                    grant_type: 'authorization_code',
                    redirect_uri: url.web,
                    code,
                });                
                const { access_token } = await authorizeGoogle(params);

                if (access_token) {
                    const { photoUrl, ...userInfoData } = await peopleApi.get(access_token, domainName);

                    setUser({
                        ...userInfoData,
                        avatar: photoUrl,
                        accessToken: access_token,
                    });
                }
            };

            fetchData();
        }
    }, [code]); 
    // #endregion

    return (
        <UserContext.Provider
            value={{
                user, 
                setUser,
                appointeeUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
