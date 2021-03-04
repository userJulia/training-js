'use strict';

let calculator = {
 firstNumber: null,
 secondNumber: null,

 read: function() {
   this.firstNumber = +prompt('enter a');
   this.secondNumber = +prompt('enter b');
 },

 sum: function() {
  const result = this.firstNumber + this.secondNumber;
  return result;
 },

 mul: function() {
   const result = this.firstNumber * this.secondNumber;
   return result;
 },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let calc = calculator;
calculator = null;

calc.read();
alert(calc.sum());
alert(calc.mul());

/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
