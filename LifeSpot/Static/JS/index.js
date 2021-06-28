// объявление функции в стиле Function Declaration
function filterContent(userInput) {
    // Сохраняем текст пользовательского запроса
    // Теперь принимаем пользовательский ввод в качестве параметра.
    // let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');
    debugger

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(userInput.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

// объявление функции в стиле Function Expression
let contentFilter = function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}


// немного изменим обработку сессии:
// 1. Пусть функция обработчик сессии — (handleSession) — будет объявлена через declaration и возвращает объект сессии.
// 2. Консольный вывод информации о сессии  - в отдельную функцию printSession.
// объявление через declaration, и вызов после handleSession
// printSession должна принимать объект сессии, который вернула handleSession.

// сначала вынесем консольный вывод в отдельную функцию с параметром, объявив её через Expression: 
// Логирование сессии
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result);
    }
}

// объявление функции в стиле Function Declaration
function handleSession() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и сохраним в переменную
    let age = prompt("Пожалуйста, введите ваш возраст");

    // Проверка на возраст и сохранение сессии
    if (age >= 18) {
        let startDate = new Date().toLocaleString();
        // Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert(`Приветствуем на LifeSpot!\nТекущее время: ${startDate}`);
        session.set("startDate", startDate);
    } else {
        // Выполним проверку. Если введенное число < 18, либо если введено не число -
        // пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }

    // Вывод в консоль
    //for (let result of session) {
    //    console.log(result)
    //}

    // Теперь мы возвращаем объект сессии
    return session;
}

// объявление функции в стиле Function Expression
let sessionHandler = function handleSession() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent)
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }

    for (let result of session) {
        console.log(result)
    }
}

