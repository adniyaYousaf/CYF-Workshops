function formatAsSecondsAsString(time) {
    let minutes = Math.trunc(time / 60);
    const second = time % 60;
    if (minutes < 59) {
        if (minutes == 1 && second == 1) {
            return `${minutes} minute and ${second} second`
        }
        if (minutes > 1 && second > 1) {
            return `${minutes} minutes and ${second} seconds`
        }
    }
    if (minutes > 59) {

        const hour = Math.trunc(minutes / 60);
        minutes = minutes % 60;
        if (hour == 1 && minutes == 1 && second == 1) {
            return `${hour} hour ${minutes} minutes and ${second} seconds`
        }
        if (hour > 1 && minutes == 1 && second == 1) {
            return `${hour} hours ${minutes} minute and ${second} seconds`
        }
        if (hour > 1 && minutes > 1 && second > 1) {
            return `${hour} hours ${minutes} minutes and ${second} seconds`
        }

    }

    if (second == 1) {
        return `${second} second`
    }
    if (second < 60 && second > 1) {
        return `${second} seconds`
    }
    if (second == 0) {
        return `${minutes} minutes`
    }

}





console.log(formatAsSecondsAsString(390));
console.log(formatAsSecondsAsString(140));
console.log(formatAsSecondsAsString(120));
console.log(formatAsSecondsAsString(2));
console.log(formatAsSecondsAsString(61));
console.log(formatAsSecondsAsString(6327894));
console.log(formatAsSecondsAsString(632));
console.log(formatAsSecondsAsString(2394));