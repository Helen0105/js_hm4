
const text = "lorem";
const subTitle = "lorem ipsum dolor";


if (text === "" || subTitle === "") {
    console.log("Не всі поля заповнені");
} else {
    console.log("Обидва поля заповнені");
}



const a = 4;
const b = 5;
if (a + b > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}



const word = "JavaScript"; 
if (word === "JavaScript") { 
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}


const number = 7;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}


const myName = "Olena";
const email = "olena@gmail.com";
const password = "4444444gg";


if (myName.length > 3 && email.includes("@") && password.length > 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}