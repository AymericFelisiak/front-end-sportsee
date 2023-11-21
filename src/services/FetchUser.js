import UserPerformanceDataService from './UserPerformanceDataService';
import UserActivityDataService from './UserActivityDataService';
import UserAverageSessionsDataService from './UserAverageSessionsDataService';
import UserMainDataService from './UserMainDataService';

// Main call to retrieve user data by its id. This data will be used to create the user object.

export default async function FetchUser(id) {
    const user = {
        MAIN_DATA: await UserMainDataService(id),
        ACTIVITY_DATA: await UserActivityDataService(id),
        AVERAGE_SESSIONS: await UserAverageSessionsDataService(id),
        PERFORMANCE: await UserPerformanceDataService(id)
    };

    return user;
}
