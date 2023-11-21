import React from 'react';
import { ReactComponent as FlameIcon } from '../../images/flame.svg';
import { ReactComponent as MeatIcon } from '../../images/meat.svg';
import { ReactComponent as AppleIcon } from '../../images/apple.svg';
import { ReactComponent as CheeseBurgerIcon } from '../../images/cheeseburger.svg';

// Returns the data of the card by its index

export function getCardData(index) {
    const newData = { icon: '', color: '', keyData: '' };
    if (index === 0) {
        newData.icon = <FlameIcon />;
        newData.color = 'red';
        newData.keyData = 'Calories';
        return newData;
    }
    if (index === 1) {
        newData.icon = <MeatIcon />;
        newData.color = 'blue';
        newData.keyData = 'Protéines';
        return newData;
    }
    if (index === 2) {
        newData.icon = <AppleIcon />;
        newData.color = 'yellow';
        newData.keyData = 'Glucides';
        return newData;
    }
    if (index === 3) {
        newData.icon = <CheeseBurgerIcon />;
        newData.color = 'pink';
        newData.keyData = 'Lipides';
        return newData;
    }
}
