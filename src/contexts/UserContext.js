/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { isEmpty } from 'lodash';

import usePeopleApi from '../api/people';
import { authorize as authorizeGoogle } from '../api/google';

import { url, googleApi } from '../constants/environment';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // #region State definition
    const location = useLocation();
    const peopleApi = usePeopleApi();

    const [user, setUser] = useState({});
    const [appointeeUser, setAppointeeUser] = useState(null);
    // #endregion

    // #region Component definition
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    // #endregion
    
    // #region Life cycle
    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (!!localUser) {
            setUser(JSON.parse(localUser));
        }

        const domainName = window.location.hostname.replace("." + url.appointeeWeb, "");
        if (!isEmpty(domainName)) {
            // TODO: getUserByUserName
            // TODO: getUserByUserName sonucu null ise anasayfaya yönlendir.
            const newAppointeeUser = {
                avatar: undefined,
                name: "Reçep Çil",
                description: "Handsome boy",
                address: "Tallinn",
                emailAddress: "rchil@appoint.ee",
                phoneNumber: "555 444 33 22",
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
            console.log("code", code);
            const fetchData = async () => {
                const params = new URLSearchParams({
                    ...googleApi,
                    grant_type: 'authorization_code',
                    redirect_uri: url.web,
                    code,
                });                
                const { access_token } = await authorizeGoogle(params);

                if (access_token) {
                    const { photoUrl, ...userInfoData } = await peopleApi.get(access_token);

                    setUser({
                        ...userInfoData,
                        avatar: photoUrl,
                        accessToken: access_token,
                        description: 'Müthiş bir girişim fikriniz mi var?\nGelin konuşalım. \nUzman ekibimiz ile neden\nbatacağınızı anlatalım.',
                    });
                }
            };

            fetchData();
        }
    }, [code]); 
    // #endregion

    // #region Callbacks
    const getOperableUser = useCallback(() => appointeeUser ?? user, [appointeeUser, user]);
    // #endregion

    return (
        <UserContext.Provider
            value={{
                user, 
                setUser,
                appointeeUser,
                getOperableUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
