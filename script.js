// Задание 1

function cube (number1,number2) {
    const CubeNumber1 = number1**3;
    const CubeNumber2 = number2**3;
    let result = CubeNumber1 + CubeNumber2;
    alert (`Сумма кубов = ${result}`);
 };
const Num1 = document.querySelector (".num1");
const Num2 = document.querySelector (".num2");
const Task1But = document.querySelector(".task1But");

Task1But.addEventListener("click", function() {
    const numberValue1 = Number(Num1.value);
    const numberValue2 = Number(Num2.value);
    cube (numberValue1,numberValue2);
});

// Задание 2

function result(salary) {
    if (isNaN(salary)) { 
        alert ("Неверный тип данных!");
    }
    else {
        let TotalSelare = salary - salary*0.13;
        alert (`Размер заработной платы за вычетом налогов равен ${TotalSelare}`);
    }
};
const Num = document.querySelector (".num");
const Task2But = document.querySelector(".task2But");

Task2But.addEventListener("click", function() {
    const SalaryValue = Num.value;
    result (SalaryValue);
});

// Задание 3

function max (a,b,c) {
    const MaxValue = Math.max(a,b,c); 
    alert (`Максимальное число - ${MaxValue}`);
};
const Val1 = document.querySelector (".value1");
const Val2 = document.querySelector (".value2");
const Val3 = document.querySelector (".value3");
const Task3But = document.querySelector(".task3But");

Task3But.addEventListener("click", function(){
    const Val1Value = Val1.value;
    const Val2Value = Val2.value;
    const Val3Value = Val3.value;
    max (Val1Value,Val2Value,Val3Value);
});

// Задание 4

function add (a,b) {
    return a+b;
};
function sub (a,b) {
  return a-b;
};
function mult (a,b) {
   return a*b;
};
function divis (a,b) {
    return a/b;
};

const Number1 = document.querySelector(".number1");
const Number2 = document.querySelector(".number2");
const Task4But1 = document.querySelector(".Addition");
const Task4But2 = document.querySelector(".Subtraction");
const Task4But3 = document.querySelector(".Multiplication");
const Task4But4 = document.querySelector(".Division");

Task4But1.addEventListener ("click", function(){
    const Numb1Value = Number(Number1.value);
    const Numb2Value = Number(Number2.value);
    alert (`Сумма = ${add(Numb1Value,Numb2Value)}`);
});
Task4But2.addEventListener ("click", function(){
    const Numb1Value = Number(Number1.value);
    const Numb2Value = Number(Number2.value);
    alert (`Разность = ${sub(Numb1Value,Numb2Value)}`);
});
Task4But3.addEventListener("click",function(){
    const Numb1Value = Number(Number1.value);
    const Numb2Value = Number(Number2.value);
    alert (`Произведения = ${mult(Numb1Value,Numb2Value)}`);
});
Task4But4.addEventListener("click",function(){
    const Numb1Value = Number(Number1.value);
    const Numb2Value = Number(Number2.value);
    alert (`Частное = ${divis(Numb1Value,Numb2Value)}`);
});

//Задание 5

function isPrime(num) {
    if((num % 2 === 0 && num !== 2) || num <=1) {
        return alert (`${num} - не является простым числом`);
    }
    const limit = Math.floor(Math.sqrt(num));
    for(let index = 3; index<=limit; index+=2){
        if (num % index === 0) {
            return alert (`${num} - не является простым числом`);
        }
    }
    return alert (`${num} - является простым числом`);
};

const Numb = document.querySelector(".number");
const Task5But = document.querySelector(".task5But");

Task5But.addEventListener("click", function(){
    const NumbValue = Number(Numb.value);
    isPrime(NumbValue);
});