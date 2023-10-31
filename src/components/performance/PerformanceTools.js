export function formattedPerformanceData(userPerformance) {
    const newPerformanceData = [];

    for (let i = 0; i < 6; i++) {
        const tempData = userPerformance.data[i];
        const tempKey = tempData.kind;
        const newData = {
            value: tempData.value,
            kind: getKindInFrench(userPerformance.kind[tempKey])
        };

        newPerformanceData.push(newData);
    }

    return newPerformanceData.reverse();
}

function getKindInFrench(value) {
    if (value === 'cardio') return 'Cardio';
    if (value === 'energy') return 'Energie';
    if (value === 'endurance') return 'Endurance';
    if (value === 'strength') return 'Force';
    if (value === 'speed') return 'Vitesse';
    if (value === 'intensity') return 'Intensité';
}

export function getMaxPerformanceValue(userPerformance) {
    let max = 0;

    for (let i = 0; i < 6; i++) {
        const perf = userPerformance[i].value;
        if (perf > max) {
            max = perf;
        }
    }

    return max;
}
