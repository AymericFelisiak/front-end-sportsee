import { useMockedData } from '../config';
import MainData from '../mock/MainData.json';

export default async function UserMainDataService(id) {
    if (useMockedData) {
        const userData = MainData.find((data) => data.id === Number(id));
        return userData;
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Error', error);
    }
}
