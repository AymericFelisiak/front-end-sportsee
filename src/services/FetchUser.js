import UserPerformanceDataService from './UserPerformanceDataService';
import UserActivityDataService from './UserActivityDataService';
import UserAverageSessionsDataService from './UserAverageSessionsDataService';
import UserMainDataService from './UserMainDataService';

// Main call to retrieve user data by its id. This data will be used to create the user object.

export default async function FetchUser(id) {
    const MAIN_DATAA = UserMainDataService(id);
    const ACTIVITY_DATAA = UserActivityDataService(id);
    const AVERAGE_SESSIONSA = UserAverageSessionsDataService(id);
    const PERFORMANCEA = UserPerformanceDataService(id);

    await Promise.all([
        MAIN_DATAA,
        ACTIVITY_DATAA,
        AVERAGE_SESSIONSA,
        PERFORMANCEA
    ]);

    const user = {
        MAIN_DATA: await MAIN_DATAA,
        ACTIVITY_DATA: await ACTIVITY_DATAA,
        AVERAGE_SESSIONS: await AVERAGE_SESSIONSA,
        PERFORMANCE: await PERFORMANCEA
    };

    console.log(user);

    return user;
}
