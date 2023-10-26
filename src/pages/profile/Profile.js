import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContextProvider } from '../../contexts/UserContext';
import AverageSessions from '../../components/averagesessions/AverageSessions';
import UserName from '../../components/username/UserName';
import DailySessions from '../../components/dailysessions/DailySessions';
import InfoCards from '../../components/infocards/InfoCards';
import Performance from '../../components/performance/Performance';

export default function Profile() {
    const { id } = useParams();

    return (
        <UserContextProvider id={id}>
            <main className="main-container">
                <UserName></UserName>
                <DailySessions></DailySessions>
                <InfoCards></InfoCards>
                <AverageSessions></AverageSessions>
                <Performance></Performance>
            </main>
        </UserContextProvider>
    );
}
