import React, { createContext } from 'react';

const AuthContext = createContext()

const UserContext = ({children}) => {
    const authInfo = {}
    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;