import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    // #region State definition
    const [user, setUser] = useState({});
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
