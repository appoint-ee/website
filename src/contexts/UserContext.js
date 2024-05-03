import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { url, googleApi } from '../constants/environment';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // #region State definition
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

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

                try {
                    const response = await fetch(url.googleApiAuth, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: params.toString(),
                    });

                    if (!response.ok) {
                        throw new Error('An error was encountered during the authentication process!');
                    }

                    const authResponseData = await response.json();
                        
                    if(authResponseData.access_token) {
                        const headers = {
                            'accept': 'text/plain',
                            'Authorization': 'Bearer ' + authResponseData.access_token
                        };

                        const response = await fetch(url.appointeeApi + '/people', {
                            method: 'GET',
                            headers: headers
                        });

                        if (!response.ok) {
                            throw new Error('An error was encountered during the process of populating user data!');
                        }

                        const userInfoData = await response.json();

                        setUser({
                            name: userInfoData.name,
                            address: userInfoData.address,
                            email: userInfoData.emailAddress,
                            phone: userInfoData.phoneNumber,
                            avatar: userInfoData.photoUrl,
                            description: 'Müthiş bir girişim fikriniz mi var?\nGelin konuşalım. \nUzman ekibimiz ile neden\nbatacağınızı anlatalım.',
                        });
                    }
                }
                catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }
    }, [code, setUser]); 
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
