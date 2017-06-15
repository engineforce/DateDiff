
export function dateDiff(dateText1, dateText2) {
    if (!isValidDateInput(dateText1)) {
        throw new Error(`date 1: ${dateText1} is not a valid input, expect string: DD MM YYYY`);
    }

    if (!isValidDateInput(dateText2)) {
        throw new Error(`date 2: ${dateText2} is not a valid input, expect string: DD MM YYYY`);
    }

    
}

function isValidDateInput(dateText) {
    if (!dateText || typeof (dateText) !== "string") {
        return false;
    }

    let match = /(\d{1,2}) (\d{1,2}) (\d{4})/.exec(dateText);

    if (!match) {
        return false;
    }

    let day = parseInt(match[1]);
    let month = parseInt(match[2]);
    let year = parseInt(match[3]);

    if (!isValidDay(day, month, year)) {
        return false;
    }

    if (!isValidMonth(month)) {
        return false;
    }

    if (!isValidYear(year)) {
        return false;
    }

    return true;
}

function isValidYear(year) {
    return year >= 1900;    // Ignore the max year limitation.
}

function isValidMonth(month) {
    return month >= 1 && month <= 12;
}

function isValidDay(day, month, year) {
    if (date <= 0) {
        return false;
    }

    if (month == 2) {
        if (isValidYear(year)) {
            return day <= 29;
        }

        return day <= 30;
    }

    if (month <= 7) {
        return month < ((month % 2) == 1 ? 31 : 30);
    }

    return month < ((month % 2) == 0 ? 31 : 30);
}

function isLeapYear(year) {
    return (year / 4) == 0 && (year / 400) != 0;
}


