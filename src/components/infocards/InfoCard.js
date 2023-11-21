import React from 'react';
import { getCardData } from './InfoCardTools';

/* Component for the info card.
Data : contains the value and the icon
Index : if 0 then kCal else g
*/

export default function InfoCard({ data, index }) {
    const newData = getCardData(index);

    return (
        <div className="infocard-wrapper">
            <div className={`image-wrapper ${newData.color}`}>
                {newData.icon}
            </div>
            <div className="data-wrapper">
                <h3>
                    {data}
                    {index ? 'g' : 'kCal'}
                </h3>
                <span>{newData.keyData}</span>
            </div>
        </div>
    );
}
