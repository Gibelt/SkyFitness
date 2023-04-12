# Импорт

По дефолту импортируется редьюсер с методами бэк-энда, а дополнительно - объект функций.

Пример импорта:

`import reduser from 'backEnd'`
`import { CreateUser } from 'backEnd'`

# Использование

В любую функцию передаются данные запроса (т.е. body request) и функция,
которая будет вызвана после возварата данных от сервера (т.к. запрос асинхронный).
В переданную функцию при вызове в свою очередь будут переданы в качестве аргумента данные ответа от сервера.

Пример использования:

function onClickBtn() {
const requestData = `ДАННЫЕ ЗАПРОСА` <!-- в данном случае формат данных { email: 'XXX@google.ru', password: 'XXX' } -->
const responseFunc = (responseData) => {console.log(responseData);}
reduser.createUser(requestData, responseFunc); <!-- или --> CreateUser(requestData, responseFunc);
}

onClickBtn() <!-- выдаст в консоль `ДАННЫЕ ОТВЕТА`, которые вернет сервер -->

# Список доступных функций

По дефолту:

reduser
.createUser `РЕГИСТРАЦИЯ`
.signIn `АВТОРИЗАЦИЯ`
.signOut
.doPasswordUpdate
.getData

Дополнительно:

CreateUser `РЕГИСТРАЦИЯ`
SignIn `АВТОРИЗАЦИЯ`
GetData
