import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import { useUserContext } from '../../contexts/UserContext';

export default function InfoCards() {
    const { MAIN_DATA } = useUserContext();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(MAIN_DATA.keyData);
    });

    return (
        <div className="infocards-container">
            {Object.keys(data).map((key, i) => {
                return <InfoCard key={i} data={data[key]} index={i} />;
            })}
        </div>
    );
}
