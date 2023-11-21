import React, { useEffect, useState } from 'react';
import {
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    PolarAngleAxis
} from 'recharts';
import { useUserContext } from '../../contexts/UserContext';
import formatUserScore from '../score/ScoreTools';

// Component for the radial bar chart showing the user score

export default function ScoreRadialBarChart() {
    const { score } = useUserContext();
    const [newScore, setNewScore] = useState([]);

    useEffect(() => {
        setNewScore(formatUserScore(score));
        console.log(newScore);
    }, []);

    return (
        <ResponsiveContainer>
            <RadialBarChart
                data={newScore}
                startAngle={220}
                endAngle={-140}
                innerRadius='65%'
                barSize={10}
            >
                <RadialBar
                    minAngle={15}
                    dataKey="score"
                    cornerRadius={80}
                    fill="#FF0000"
                />
                <PolarAngleAxis
                    type="number"
                    domain={[0, 1]}
                    angleAxisId={0}
                    tick={false}
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}
