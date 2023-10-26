import React, { createContext, useContext, useEffect, useState } from 'react';
import FetchUser from '../services/FetchUser';

const UserContext = createContext();

export function UserContextProvider({ id, children }) {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await FetchUser(id);
                setUserData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error user fetch', error);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    );
}

export function useUserContext() {
    const user = useContext(UserContext);
    if (user === undefined) {
        throw new Error('Context error');
    }

    return user;
}
