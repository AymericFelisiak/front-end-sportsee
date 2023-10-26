import UserPerformanceDataService from './UserPerformanceDataService';
import UserActivityDataService from './UserActivityDataService';
import UserAverageSessionsDataService from './UserAverageSessionsDataService';
import UserMainDataService from './UserMainDataService';

export default async function FetchUser(id) {
    const user = {
        MAIN_DATA: await UserMainDataService(id),
        ACTIVITY_DATA: await UserActivityDataService(id),
        AVERAGE_SESSIONS: await UserAverageSessionsDataService(id),
        PERFORMANCE: await UserPerformanceDataService(id)
    };

    return user;
}
