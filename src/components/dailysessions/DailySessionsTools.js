// Formats the data for the bar chart

export function formattedDailySessionsDate(sessions) {
    const formattedSessions = [];

    for (let i = 0; i < sessions.length; i++) {
        const newDate = new Date(sessions[i].day);
        const newData = {
            date: newDate.getDate(),
            kilogram: sessions[i].kilogram,
            calories: sessions[i].calories
        };
        formattedSessions.push(newData);
    }

    return formattedSessions;
}
