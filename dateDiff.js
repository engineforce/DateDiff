function datediff(dateText1, dateText2) {
    if (!isValidDate(dateText1)) {
        throw new Error(`date 1: ${dateText1} is not a valid input, expect string: DD MM YYYY`);
    }

    if (!isValidDate(dateText2)) {
        throw new Error(`date 2: ${dateText2} is not a valid input, expect string: DD MM YYYY`);
    }

    let date1 = parseDateText(dateText1);
    let date2 = parseDateText(dateText2);

    let days1 = getDays(date1);
    let days2 = getDays(date2);

    return days2 - days1;
}

// Formula is found on https://math.stackexchange.com/questions/683312/formula-to-calculate-difference-between-two-dates
function getDays({ day, month, year }) {

    if (month <= 2) {
        month = month + 12;
        year = year - 1;
    }
    
    return 365 * year + Math.floor(year / 4) -
        Math.floor(year / 100) + Math.floor(year / 400) + day +
        Math.floor((153 * month + 8) / 5);
}

function isValidDate(dateText) {
    if (!dateText || typeof (dateText) !== "string") {
        return false;
    }

    let parsedDate = parseDateText(dateText);
    if (!parsedDate)
        return false;

    let { day, month, year } = parsedDate;

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

function parseDateText(dateText) {
    dateText = dateText.trim();

    let match = /^(\d{1,2}) (\d{1,2}) (\d{4})$/.exec(dateText);

    if (match) {
        let day = parseInt(match[1]);
        let month = parseInt(match[2]);
        let year = parseInt(match[3]);

        return {
            day,
            month,
            year,
        }
    }

    return undefined;
}

function isValidYear(year) {
    // Max year limitation is 9999, enforced by above regular expression.
    return year >= 1900;
}

function isValidMonth(month) {
    return month >= 1 && month <= 12;
}

function isValidDay(day, month, year) {
    // This is not needed, because above regular expression will enforce positive day
    // if (day <= 0) {
    //     return false;
    // }

    if (month == 2) {
        if (isLeapYear(year)) {
            return day <= 29;
        }

        return day <= 28;
    }

    if (month <= 7) {
        return day <= ((month % 2) == 1 ? 31 : 30);
    }

    return day <= ((month % 2) == 0 ? 31 : 30);
}

function isLeapYear(year) {
    if (year % 100 == 0) {
        return year % 400 == 0;
    }

    return year % 4 == 0;
}

module.exports = datediff;
