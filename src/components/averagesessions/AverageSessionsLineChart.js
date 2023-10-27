import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useUserContext } from '../../contexts/UserContext';
import {
    formattedAverageSessions,
    getMinSessionLength
} from './AverageSessionsTools';

export default function AverageSessionsLineChart() {
    const { AVERAGE_SESSIONS } = useUserContext();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const newData = formattedAverageSessions(AVERAGE_SESSIONS.sessions);
        setUserData(newData);
    }, []);

    return (
        <LineChart width={500} height={200} data={userData}>
            <defs>
                <linearGradient
                    id="lineGradient"
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                >
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                    <stop offset="40%" stopColor="#FFFFFF" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                </linearGradient>
                <radialGradient id="dotGradient">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="rgba(255, 255, 255, 1)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>
            </defs>
            <XAxis
                axisLine={false}
                tickLine={false}
                dataKey="day"
                tick={{
                    fill: '#FFFFFF',
                    dy: 15,
                    fontWeight: 500,
                    fontSize: 12,
                    opacity: 0.7
                }}
            />
            <YAxis domain={[getMinSessionLength(userData) - 10]} hide={true} />
            <Tooltip cursor={{ stroke: 'black', strokeWidth: 2 }} />
            <Line
                stroke="url(#lineGradient)"
                strokeWidth={3}
                type="natural"
                dataKey="sessionLength"
                dot={false}
                activeDot={{
                    stroke: 'rgba(255, 255, 255, 0.35)',
                    strokeWidth: 10,
                    fill: 'white',
                    r: 5
                }}
            />
        </LineChart>
    );
}