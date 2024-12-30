let text1 = prompt("ENter anything please");
let text2 = prompt("Ведіть що завГодно");

if (text1 !== "" && text2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не усі поля було заповнено");
}
let num1 =prompt("Enter number 1 ");
let num2 = prompt("Enter number 2 ");
let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
let texty =prompt("Enter something with JavaScript");
if (texty.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
let number =prompt("Enter number from 10 to 20 ");
if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}
let Name = prompt("Enter ur name");
let email = prompt("Enter ur email");
let password = prompt("ENter ur password");

if (Name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
