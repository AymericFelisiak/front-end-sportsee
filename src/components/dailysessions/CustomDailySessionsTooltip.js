import React from 'react';

// Custom the tooltip of bar chart when hovering the graph

export default function CustomDailySessionsTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="dailysessions-tooltip">
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
}
