let input1_1 = document.getElementById("input1_1");
let input1_2 = document.getElementById("input1_2");
let button1 = document.getElementById("submitButton1");
let text1 = document.getElementById("text1");

let inputValue1_1;
let inputValue1_2;
button1.addEventListener("click", function () {
  inputValue1_1 = input1_1.value;
  inputValue1_2 = input1_2.value;
  if (inputValue1_1 && inputValue1_2) {
    text1.textContent = "Обидва поля заповнені";
  } else {
    text1.textContent = "Не всі поля заповнені";
  }
});

/////////////////////////////////////////////////////

let input2_1 = document.getElementById("input2_1");
let input2_2 = document.getElementById("input2_2");
let button2 = document.getElementById("submitButton2");
let text2 = document.getElementById("text2");

let inputValue2_1;
let inputValue2_2;
let sum;

button2.addEventListener("click", function () {
  inputValue2_1 = Number(input2_1.value);
  inputValue2_2 = Number(input2_2.value);
  sum = inputValue2_1 + inputValue2_2;
  if (inputValue2_1 && inputValue2_2) {
    if (sum > 10) {
      text2.textContent = "Сума більша за 10";
    } else {
      text2.textContent = "Сума менша або дорівнює 10";
    }
  } else {
    text2.textContent = "Не всі поля заповнені";
  }
});

/////////////////////////////////////////////////////

let input3_1 = document.getElementById("input3_1");
let button3 = document.getElementById("submitButton3");
let text3 = document.getElementById("text3");

let inputValue3_1;

button3.addEventListener("click", function () {
  inputValue3_1 = input3_1.value;
  if (inputValue3_1) {
    if (inputValue3_1.includes("JavaScript")) {
      text3.textContent = "Текст містить слово JavaScript";
    } else {
      text3.textContent = "Текст не містить слово JavaScript";
    }
  } else {
    text3.textContent = "Поле незаповнене";
  }
});

////////////////////////////////////////////////////

let input4_1 = document.getElementById("input4_1");
let button4 = document.getElementById("submitButton4");
let text4 = document.getElementById("text4");

let inputValue4_1;

button4.addEventListener("click", function () {
  inputValue4_1 = input4_1.value;
  if (inputValue4_1) {
    if (10 < inputValue4_1 && inputValue4_1 < 20) {
      text4.textContent = "Число входить в діапазон від 10 до 20";
    } else {
      text4.textContent = "Число не входить в діапазон від 10 до 20";
    }
  } else {
    text4.textContent = "Поле незаповнене";
  }
});

/////////////////////////////////////////////////////

let input5_1 = document.getElementById("input5_1");
let input5_2 = document.getElementById("input5_2");
let input5_3 = document.getElementById("input5_3");
let button5 = document.getElementById("submitButton5");
let text5_1 = document.getElementById("text5_1");
let text5_2 = document.getElementById("text5_2");
let text5_3 = document.getElementById("text5_3");

let inputValue5_1;
let inputValue5_2;
let inputValue5_3;

button5.addEventListener("click", function () {
  inputValue5_1 = input5_1.value;
  inputValue5_2 = input5_2.value;
  inputValue5_3 = input5_3.value;

  if (inputValue5_1.length < 3) {
    text5_1.textContent = "Ім'я містить менше 3 символів";
  } else {
    text5_1.textContent = "";
  }
  if (!inputValue5_2.includes("@") && !inputValue5_2.includes(".")) {
    text5_2.textContent = "Email не містить символ @ та крапку після неї";
  } else {
    text5_2.textContent = "";
  }
  if (inputValue5_3.length < 6) {
    text5_3.textContent = "Пароль містить менше 6 символів";
  } else {
    text5_3.textContent = "";
  }
  if (
    inputValue5_1.length > 2 &&
    inputValue5_2.includes("@") &&
    inputValue5_2.includes(".") &&
    inputValue5_3.length > 5
  ) {
    window.location.href = "http://127.0.0.1:5500/second-page.html";
  }
});
