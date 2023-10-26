import { useMockedData } from '../config';
import ActivityData from '../mock/ActivityData.json';

export default async function UserDataService(id) {
    if (useMockedData) {
        const userData = ActivityData.find(
            (data) => data.userId === Number(id)
        );
        return userData;
    }
    try {
        const response = await fetch(
            `http://localhost:3000/user/${id}/activity`
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
