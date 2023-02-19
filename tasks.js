function getString(array, n){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n){
               return 'Yes  '  
        }   
    } return ' No'
}

function getNumbers(array,  n) {
     let arrayEqual = []
     for (let i = 0; i < array.length; i++) {
          if(array[i] === n){
               arrayEqual.push(array[i])
          }  
     } 
     if(arrayEqual.length !== 0){
          return arrayEqual
     }
     else return 'No coincidences'
}

let data = [2, 3, 67, 18.74983249873284723, 9847324987, 67, 2984732498,
     2732];
console.log(getString(data, 67));

console.log(getNumbers(data, 67))





function getNumbersMore2(numbersArray, n){
    
     let count = 0
     for (let i = 0; i < numbersArray.length; i++) {
          if (numbersArray[i] > n){
             
               count++;
          }
     } 
     return 'I have found ' + count + ' numbers'
}
//console.log(getNumbersMore2([-4, 5, 09, 375, -63], 8))

let Student = { name: "Никита", sur: "Гвоздов", age: 19}

function getAllKeys(obj){
     console.log(obj.name);
}

//console.log(getAllKeys(Student))



