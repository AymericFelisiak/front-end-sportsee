import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContextProvider } from '../../contexts/UserContext';
import AverageSessions from '../../components/averagesessions/AverageSessions';
import UserName from '../../components/username/UserName';
import DailySessions from '../../components/dailysessions/DailySessions';
import InfoCards from '../../components/infocards/InfoCards';
import Performance from '../../components/performance/Performance';
import Score from '../../components/score/Score';

export default function Profile() {
    const { id } = useParams();

    return (
        <UserContextProvider id={id}>
            <main className="main-container">
                <UserName />
                <DailySessions />
                <InfoCards />
                <AverageSessions />
                <Performance />
                <Score />
            </main>
        </UserContextProvider>
    );
}
