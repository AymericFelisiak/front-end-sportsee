import React, { useEffect, useState } from 'react';
import ScoreRadialBarChart from './ScoreRadialBarChart';
import { useUserContext } from '../../contexts/UserContext';
import { getUserScore } from './ScoreTools';

export default function Score() {
    const { MAIN_DATA } = useUserContext();
    const [score, setScore] = useState([]);

    useEffect(() => {
        setScore(getUserScore(MAIN_DATA));
    }, []);

    return (
        <div className="score-container">
            <h2>Score</h2>
            <div className="score-wrapper">
                <h3>{score * 100}%</h3>
                <p>de votre</p>
                <p>objectif</p>
            </div>
            <ScoreRadialBarChart />
        </div>
    );
}
