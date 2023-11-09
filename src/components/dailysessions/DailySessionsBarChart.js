import React, { useEffect, useState } from 'react';
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import { useUserContext } from '../../contexts/UserContext';
import { formattedDailySessionsDate } from './DailySessionsTools';
import CustomDailySessionsTooltip from './CustomDailySessionsTooltip';

export default function DailySessionsBarChart() {
    const { ACTIVITY_DATA } = useUserContext();
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        setDailyData(formattedDailySessionsDate(ACTIVITY_DATA.sessions));
    }, []);

    return (
        <ResponsiveContainer width="99%">
            <BarChart
                data={dailyData}
                margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
            >
                <CartesianGrid
                    stroke="#DEDEDE"
                    strokeDasharray="2 2"
                    vertical={false}
                />
                <XAxis
                    dataKey="date"
                    tick={{
                        fill: '#9B9EAC',
                        dy: 15,
                        fontWeight: 500,
                        fontSize: 15
                    }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    dataKey="kilogram"
                    yAxisId="right"
                    orientation="right"
                    tick={{
                        fill: '#9B9EAC',
                        dx: 30,
                        fontWeight: 500,
                        fontSize: 15
                    }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    dataKey="calories"
                    yAxisId="left"
                    orientation="left"
                    hide={true}
                />
                <Tooltip
                    content={<CustomDailySessionsTooltip />}
                    cursor={{ fill: '#C4C4C450' }}
                />
                <Legend
                    iconType="circle"
                    iconSize={8}
                    align="right"
                    verticalAlign="top"
                    height={25}
                />
                <Bar
                    dataKey="kilogram"
                    yAxisId="right"
                    fill="#282D30"
                    name="Poids (kg)"
                    barSize={7}
                    radius={[5, 5, 0, 0]}
                />
                <Bar
                    dataKey="calories"
                    yAxisId="left"
                    fill="#E60000"
                    name="Calories brûlées (kCal)"
                    barSize={7}
                    radius={[5, 5, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
