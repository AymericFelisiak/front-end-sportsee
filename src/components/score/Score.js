import React, { useEffect, useState } from 'react';
import ScoreRadialBarChart from './ScoreRadialBarChart';
import { useUserContext } from '../../contexts/UserContext';

export default function Score() {
    const { score } = useUserContext();
    const [newScore, setNewScore] = useState([]);

    useEffect(() => {
        setNewScore(score);
    }, []);

    return (
        <div className="score-container">
            <h2>Score</h2>
            <div className="score-wrapper">
                <h3>{newScore * 100}%</h3>
                <p>de votre</p>
                <p>objectif</p>
            </div>
            <ScoreRadialBarChart />
        </div>
    );
}
