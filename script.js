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