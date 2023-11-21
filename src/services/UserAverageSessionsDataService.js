import { useMockedData } from '../config';
import AverageSessionData from '../mock/AverageSessionsData.json';

// Retrieves either API or Mocked user average session data by its id.

export default async function UserAverageSessionsDataService(id) {
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
