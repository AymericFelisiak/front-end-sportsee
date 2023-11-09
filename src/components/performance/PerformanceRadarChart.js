import React, { useEffect, useState } from 'react';
import {
    ResponsiveContainer,
    RadarChart,
    PolarAngleAxis,
    Radar,
    PolarGrid,
    PolarRadiusAxis
} from 'recharts';
import { useUserContext } from '../../contexts/UserContext';
import { formattedPerformanceData, getMaxPerformanceValue } from './PerformanceTools';

export default function PerformanceRadarChart() {
    const { performance } = useUserContext();
    const [performanceData, setPerformanceData] = useState([]);
    const [maxValue, setMaxValue] = useState('');

    useEffect(() => {
        const newData = formattedPerformanceData(performance);
        setPerformanceData(newData);
        setMaxValue(getMaxPerformanceValue(newData) + 20);
    }, []);

    return (
        <ResponsiveContainer>
            <RadarChart data={performanceData} fill="#282D30" margin={{ top: 30, right: 30, bottom: 30, left: 30 }}>
                <PolarGrid stroke="#FFFFFF" radialLines={false}/>
                <PolarRadiusAxis axisLine={false} tick={false} domain={[0, maxValue]}/>
                <PolarAngleAxis
                    dataKey="kind"
                    tick={{
                        fill: '#FFFFFF',
                        fontWeight: 500,
                        fontSize: 12
                    }}
                />
                <Radar dataKey="value" fill="#ff0000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}
