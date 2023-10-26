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
            <div className="username-wrapper">
                <h1>Bonjour&nbsp;</h1>
                <h1 className='name'>{userName}</h1>
            </div>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
}
