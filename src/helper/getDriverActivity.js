export const getActivityDuration = (traces) => {
    let workHours = 0;
    let driveHours = 0;
    let restHours = 0;
    let availableHours = 0;
    traces.map(trace =>
        trace.activity.map(item =>
            item.type === "work" ?
                workHours = workHours + item.duration
                : item.type === "drive"
                    ? driveHours = driveHours + item.duration
                    : item.type === "rest"
                        ? restHours = restHours + item.duration
                        : item.type === "available"
                            ? availableHours = availableHours + item.duration
                            : 0
        )
    );
    return {
        workHours: workHours,
        driveHours: driveHours,
        restHours: restHours,
        availableHours: availableHours,
        totalActivityHours: workHours + driveHours + restHours + availableHours
    };
}

export const getTotalActivityDuration = (traces) => {
    let workHours = 0;
    let driveHours = 0;
    let restHours = 0;
    let availableHours = 0;
    traces.map(trace =>
        trace.activity.map(item =>
            item.type === "work" ?
                workHours = workHours + item.duration
                : item.type === "drive"
                    ? driveHours = driveHours + item.duration
                    : item.type === "rest"
                        ? restHours = restHours + item.duration
                        : item.type === "available"
                            ? availableHours = availableHours + item.duration
                            : 0
        )
    );
    return workHours + driveHours + restHours + availableHours;
}

export const checkActiveDate = (traces, date) => {
    let activeDateArray = [];
    traces.map(item => activeDateArray.push(item.date))
    return activeDateArray.includes(date) ? true : false;
}