import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import { useUserContext } from '../../contexts/UserContext';

// Container for the cards components

export default function InfoCards() {
    const { keyData } = useUserContext();
    const [newKeyData, setNewKeyData] = useState([]);

    useEffect(() => {
        setNewKeyData(keyData);
    });

    return (
        <div className="infocards-container">
            {Object.keys(newKeyData).map((key, i) => {
                return <InfoCard key={i} data={newKeyData[key]} index={i} />;
            })}
        </div>
    );
}
