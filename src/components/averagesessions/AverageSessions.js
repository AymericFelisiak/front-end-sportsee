import React from 'react';
import AverageSessionsLineChart from './AverageSessionsLineChart';

// Main component containing the line chart

export default function AverageSessions() {
    return (
        <div className="averagesessions-container">
            <h3>Durée moyenne des <br />sessions </h3>
            <AverageSessionsLineChart />
        </div>
    );
}
