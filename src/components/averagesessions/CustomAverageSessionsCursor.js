import React from 'react';
import { Rectangle } from 'recharts';

export default function CustomAverageSessionsCursor({ points }) {
    const div = document.querySelector('.averagesessions-container');
    const width = div.offsetWidth;
    const height = div.offsetHeight;

    const { x } = points[0];

    return (
        <Rectangle
            className="rectangle"
            fill="black"
            stroke="black"
            radius={[0, 10, 10, 0]}
            x={x}
            width={width - x}
            height={height}
        />
    );
}
