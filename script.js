
function isValidDate (date) {
    if (date.length != 10) {
        console.log("Retourne une date au format dd/mm/yyyy");
    } else { 
        let result = date.split("/");
        let validDate = maxDaysInMonth(result[0], result[1], result[2]);
        
        if (validDate != undefined) {
        console.log(validDate);
        }
    }
}

function maxDaysInMonth (day, month, year) {
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        console.log("Retourne moi une date dd/mm/yyyy.");

    } else if (month == 4 || month == 6 || month == 9 || month == 11 && day > 30) {
        console.log(`Date invalide : il n'y a que 30 jours dans ce mois.`);

    } else if (month == 2 && day > 29) {
        console.log(`Il n'y pas autant de jours en février.`);
    
    } else if (month == 2 && year % 4 != 0 && day > 28) {
        console.log(`Ce n'est pas une année bissextile.`);
    
    } else { 
        return (`${day}/${month}/${year}`);
    }
}
 

isValidDate("24/011/1992");
isValidDate("31/06/2024");
isValidDate("32/10/2024");
isValidDate("31/11/2024");
isValidDate("29/02/2025");
isValidDate("29/02/2024");
