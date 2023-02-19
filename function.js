function getLength(str) {
    return str.length;    
}

function getSurnsme(str) {
    let arrayStr = [];      
    arrayStr = str.split(' ');
    return arrayStr[0];
}
function getName(str) {             
    let arrayStr = [];
    arrayStr = str.split(' ');
    return arrayStr[1];
}

function getPatronymic(str) {
    let arrayStr = [];
    arrayStr = str.split(' ');
    return arrayStr[2];
}

function showInfo(str) {
    let name = getName(str);
    let surnsme = getSurnsme(str);
    let patronymic = getPatronymic(str);

    return 'Name ' + name + ' ' + 'Length ' + getLength(name) + ' ' + 
           'Surnsme ' + surnsme + ' ' + 'Length ' + getLength(surnsme) + ' ' +
           'Patronymic ' + patronymic + ' ' + 'Length ' + getLength(patronymic);
}



//console.log(showInfo('Kasatkina Anna Nikolaevna'));




function getSummOfNumbers(arr) {
    
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
         summ += arr[i];
    }
     return summ;
    
} 
let arr = [1, 2, 3, 5, 8, 9, 12];
console.log(getSummOfNumbers(arr));