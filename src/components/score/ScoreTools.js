export function getUserScore(userData) {
    if ('todayScore' in userData) {
        return userData.todayScore;
    } else return userData.score;
}

export function formatUserScore(userData) {
    const userScore = getUserScore(userData);

    return [{ score: userScore }];
}
