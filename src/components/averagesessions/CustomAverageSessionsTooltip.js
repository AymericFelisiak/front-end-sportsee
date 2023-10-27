import React from 'react';

export default function CustomAverageSessionsTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="averagesessions-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
}
