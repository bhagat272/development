import React, { createContext, useState } from 'react'
import Child from './Child';

// Create context outside of the Provider component
export const UserContext = createContext();

const Provider = () => {
    const [userdata, setUserData] = useState({
        name: "sumit",
        age: 23
    });

    return (
        <UserContext.Provider value={userdata}>
            <Child  />
        </UserContext.Provider>
    );
}

export default Provider;
