function getValue(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n){
             return  'yes ' + array[i]
        }
    }
    return  'There is not  element  situated '
}

let b = x < 15 ? 55 : 100;

function getValue(array, n) {
    let result;
    let isFound = false;
    for (let i = 0; i < array.length; i++) { 

        if (array[i] == n){
            isFound = true;
            break;
        }
    }
     result = isFound == true ? 'yes this element is situated '  : 'no';
     return result;
}
  
console.log(getValue([1, 2, 3, 4, 8], 10));

function showInfo(name, func){
    console.log(name + ' ' + func(name))
}

function getLength(word) {
    return 'the length = ' + word.length + ' symbols';
}

function addOv (name){
    if(name[name.length-1] == 'a'){
        name += 'ova';
    }
    else{
        name += 'ov';        
    }
    return name;
}

showInfo('Anna', getLength);

showInfo('Leona', addOv);