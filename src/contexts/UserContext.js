import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import usePeopleApi from '../api/people';
import { authorize as authorizeGoogle } from '../api/google';

import { url, googleApi } from '../constants/environment';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // #region State definition
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    const peopleApi = usePeopleApi();

    const [user, setUser] = useState({});
    // #endregion

    // #region Life cycle
    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (!!localUser) {
            setUser(JSON.parse(localUser));
        }
    }, []);
    useEffect(() => {
        if (!!user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);
    
    useEffect(() => {
        if (code) {
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

    return (
        <UserContext.Provider
            value={{
                user, 
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
