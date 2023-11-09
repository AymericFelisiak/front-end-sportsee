import React, { useEffect, useState } from 'react';
import {
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    PolarAngleAxis
} from 'recharts';
import { useUserContext } from '../../contexts/UserContext';
import { formatUserScore } from './ScoreTools';

export default function ScoreRadialBarChart() {
    const { MAIN_DATA } = useUserContext();
    const [score, setScore] = useState([]);

    useEffect(() => {
        setScore(formatUserScore(MAIN_DATA));
    }, []);

    return (
        <ResponsiveContainer>
            <RadialBarChart
                data={score}
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
