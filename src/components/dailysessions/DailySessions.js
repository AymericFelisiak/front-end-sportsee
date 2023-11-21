import React from 'react';
import DailySessionsBarChart from './DailySessionsBarChart';

// Main component containing the bar chart

export default function DailySessions() {
    return (
        <div className='dailysessions-container'>
            <h3>Activité quotidienne</h3>
            <DailySessionsBarChart />
        </div>
    )
}
