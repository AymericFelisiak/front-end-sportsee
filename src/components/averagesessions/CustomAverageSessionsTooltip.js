import React from 'react';

// Custom the tooltip of line graph when hovering the graph

export default function CustomAverageSessionsTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="averagesessions-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
}
