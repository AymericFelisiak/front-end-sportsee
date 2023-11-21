// Formats and returns session data associated with the day

export function formattedAverageSessions(sessions) {
    const newSessions = [];
    const daysArray = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    for (let i = 0; i < sessions.length; i++) {
        const day = sessions[i].day;
        const length = sessions[i].sessionLength;
        newSessions.push({ day: daysArray[day - 1], sessionLength: length });
    }
    return newSessions;
}

// Return the shortest session contained in the data. Used to change the domain of the graph

export function getMinSessionLength(sessions) {
    let min = 10000;

    for (let i = 0; i < sessions.length; i++) {
        const currentLength = sessions[i].sessionLength;
        if (currentLength < min) {
            min = currentLength;
        }
    }

    return min;
}
