let maxDays;

function maxDaysInMonth(month, year) {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        maxDays = 30;
    } else if (month == 2 && year % 4 != 0) {
        maxDays = 28;
    } else if (month == 2 && year % 4 == 0) {
        maxDays = 29;
    } else {
        maxDays = 31;
    }
    return maxDays;
}

function isValidDate(date) {
    let result = date.split("/");
    let dayValid = maxDaysInMonth(result[1], result[2]);

    if (date.length != 10) {
        console.log("Retourne une date au format dd/mm/yyyy");
        return false;
    } else if (result[0] > dayValid) {
        //console.log(`${result[0]}/${result[1]}/${result[2]} a le jour invalide`);
        return false;
    } else if (result[1] < 1 || result[1] > 12) {
        //console.log(`${result[0]}/${result[1]}/${result[2]} a le mois invalide`);
        return false;
    } else if (result[2] < 1000 || result[2] > 9999) {
        //console.log(`${result[0]}/${result[1]}/${result[2]} a l'année invalide`);
        return false;
    } else {
        return true;
    }
}

function isPalindrom(date) {
    let validDate = isValidDate(date);
    if (validDate === true) {
        let finalDate = date.split("/").join("");

        let splitDate = date.split("/");
        let arrayDate = `${splitDate[0]}${splitDate[1]}${splitDate[2]}`;
        let reverseDate = arrayDate.split("").reverse().join("");

        if (finalDate === reverseDate) {
            console.log(`${date} est un palindrome`);
            return true
        } else {
            console.log(`${date} n'est pas un palindrome`)
            return false;
        }

    } else if (validDate === false) {
        return;
    }
}

function getNextPalindromes(x) {
    let count = 0;
    let date = new Date;
    let year = date.getFullYear();
    while (count < x) {
        
        let stringYear = year.toString();
        let dayMonthYear = `${stringYear[3]}${stringYear[2]}/${stringYear[1]}${stringYear[0]}/${stringYear}`;
        let result = isValidDate(dayMonthYear);

        if (result) {
            count++;
            year++;
            console.log(dayMonthYear);
        } else {
            year++;
        }
    }
} 

getNextPalindromes(5);