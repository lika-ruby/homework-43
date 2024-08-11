const inputValue1_1 = "eee";
const inputValue1_2 = "";

if (inputValue1_1 && inputValue1_2) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

/////////////////////////////////////////////////

const inputValue2_1 = Number(7);
const inputValue2_2 = Number(0);
const sum = inputValue2_1 + inputValue2_2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

/////////////////////////////////////////////////////

const inputValue3_1 = "dddJavaScriptfff";

if (inputValue3_1.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

////////////////////////////////////////////////////

const inputValue4_1 = Number("13");

if (10 < inputValue4_1 && inputValue4_1 < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

/////////////////////////////////////////////////////

const inputValue5_1 = "nar";
const inputValue5_2 = "ff@gmail.com";
const inputValue5_3 = "rrrrww";

if (inputValue5_1.length < 3) {
  console.log("Ім'я містить менше 3 символів");
}
if (!inputValue5_2.includes("@") || !inputValue5_2.includes(".")) {
  console.log("Email не містить символ @ та крапку після неї");
}
if (inputValue5_3.length < 6) {
  console.log("Пароль містить менше 6 символів");
}
if (
  inputValue5_1.length > 2 &&
  inputValue5_2.includes("@") &&
  inputValue5_2.includes(".") &&
  inputValue5_3.length > 5
) {
  console.log("Форма заповнена правильно");
}
