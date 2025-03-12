let maxDays;

function isValidDate (date) {
    let result = date.split("/");
    let dayValid = maxDaysInMonth(result[1], result[2]);

    if (date.length != 10) {
        console.log("Retourne une date au format dd/mm/yyyy");
    } else if (result[0] > dayValid) {
        console.log("jour invalide");
    } else if (result[1] < 1 || result[1] > 12) {
        console.log("mois invalide");
    } else if (result[2] < 1000 || result[2] > 9999) {
        console.log("année invalide");
    } else {
        let finalDate = `${result[0]}${result[1]}${result[2]}`;
        console.log(finalDate);
    }
}

function maxDaysInMonth (month, year) {
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

isValidDate("24/011/1992");
isValidDate("31/06/2024");
isValidDate("32/10/2024");
isValidDate("31/13/2024");
isValidDate("29/02/2025");
isValidDate("29/02/2024");