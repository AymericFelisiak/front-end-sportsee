import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchUser from '../../services/FetchUser';
import UserContext from '../../contexts/UserContext';
import AverageSessions from '../../components/averagesessions/AverageSessions';
import UserName from '../../components/username/UserName';
import DailySessions from '../../components/dailysessions/DailySessions';
import InfoCards from '../../components/infocards/InfoCards';
import Performance from '../../components/performance/Performance';

export default function Profile() {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const data = async() => {
            try {
                const response = await FetchUser(id);
                setUserData(response);
            } catch (error) {
                console.error('Error user fetch', error);
            }
        };
        data();
    }, [FetchUser, id]);

    return (
        <UserContext.Provider value={userData}>
            <main className="main-container">
                <UserName></UserName>
                <DailySessions></DailySessions>
                <InfoCards></InfoCards>
                <AverageSessions></AverageSessions>
                <Performance></Performance>
            </main>
        </UserContext.Provider>
    );
}
