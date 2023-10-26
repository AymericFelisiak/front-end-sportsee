import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Performance from '../../services/UserPerformanceDataService';

export default function Profile() {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const data = async() => {
            try {
                const response = await Performance(id);
                setUserData(response);
            } catch (error) {
                console.error('Error user fetch', error);
            }
        };
        data();
    }, [Performance, id]);

    console.log(userData);

    return <main className="main-container"></main>;
}
