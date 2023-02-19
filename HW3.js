import { json2xml } from 'xml-js';

//1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
 function showSumOfNumbers(num1, num2) {
    let sum = num1 + num2
    console.log('Sum of numbers = ', sum)
}  
showSumOfNumbers(126, -876)

//2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function showSquareNumber(n) {
    let result = n * n
    console.log('The square of number = ', result)
}
showSquareNumber(8)

//3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
//{"name":И,
// "surname":Ф,
// "middlename":О} 

function getJsonFormat(name, surname, middlename ) {    
    let result = JSON.stringify({name : name, surname : surname, middlename : middlename})
    return result;
}
//console.log(getJsonFormat('Hanna', 'Kasatkina', 'Nikolaevna'))

//4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход 
//принимает массив чисел.
//Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

function getEvenNumbers(numbers){
    let evensArray = []
    
    numbers.forEach(number => {
        if(number % 2 == 0){
           evensArray.push(number)
        }
    });
    
    if(evensArray.length == 0){
       
        return "No even numbers";       
    } 
    else{
        return evensArray
    }
}

//console.log(getEvenNumbers([1, 5, 3]))

//5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
//Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".


function howMuchA(word) {
    let count = 0
    let letterArray = word.split('')

     for (let i = 0; i < letterArray.length; i++) {
        if (letterArray[i] == 'p'){
             count++
            }
     }
     if (count == 0){
        return 'No a characters'
     }
     return count

}

console.log(howMuchA('Abracadabra'))


//6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
//Элементы: Phone number field, CheckBox, SignIn Button.

//7) Написать функцию которая на вход получает JSON а возвращяет XML

let jsonObj = {
    name: 'Garage',
    cars: [
      { color: 'red', maxSpeed: 120, age: 2 },
      { color: 'blue', maxSpeed: 100, age: 3 },
      { color: 'green', maxSpeed: 130, age: 2 },
    ],
  };
  
  let json = JSON.stringify(jsonObj);
  
  let xml = json2xml(json, { compact: true, spaces: 4 });
  
  console.log(xml);



  
