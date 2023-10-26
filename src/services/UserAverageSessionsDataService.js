import { useMockedData } from '../config';
import AverageSessionData from '../mock/AverageSessionData.json';

export default async function UserDataService(id) {
    if (useMockedData) {
        const userData = AverageSessionData.find(
            (data) => data.userId === Number(id)
        );
        return userData;
    }
    try {
        const response = await fetch(
            `http://localhost:3000/user/${id}/average-sessions`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.error('Error', error);
    }
}
