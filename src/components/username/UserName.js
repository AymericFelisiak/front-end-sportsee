import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';

export default function UserName() {
    const { MAIN_DATA } = useUserContext();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userName = MAIN_DATA.userInfos.firstName;
        setUserName(userName);
    });

    return (
        <div className="username-container">
            <h1>Bonjour {userName}</h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
}
