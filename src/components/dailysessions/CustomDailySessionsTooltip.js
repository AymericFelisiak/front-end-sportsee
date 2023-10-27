import React from 'react';

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
