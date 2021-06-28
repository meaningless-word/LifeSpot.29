function Filter(sender) {
    /*Код ниже отрабатывает каждый раз при вводе символа в input*/

    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// создадим объект Map для хранения сессии
let session = new Map();
// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent);

// Запросим возраст пользователя и сохраним в переменную
let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    let startDate = new Date().toLocaleString();
    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    alert(`Приветствуем на LifeSpot!\nТекущее время: ${startDate}`);
}
else {
    // Выполним проверку. Если введенное число < 18, либо если введено не число -
    // пользователь будет перенаправлен
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
    a = true + 20 + "name"
}

// Вывод в консоль
for (let result of session) {
    console.log(result)
}