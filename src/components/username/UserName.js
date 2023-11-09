import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';

export default function UserName() {
    const { userInfos } = useUserContext();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userName = userInfos.firstName;
        setUserName(userName);
    });

    return (
        <div className="username-container">
            <div className="username-wrapper">
                <h1>Bonjour&nbsp;</h1>
                <h1 className='name'>{userName}</h1>
            </div>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
}
