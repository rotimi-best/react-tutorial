# Домашки

1. Создайте компонент, который имеет список различных имен в своем состоянии, и каждый раз, когда я нажимаю на кнопку, он должен выбрать случайное имя и отобразить его в браузере, завернутый в тег h1.

2. Создайте компонент Todo, который отображает список задач внутри тегов li. Компонент todo должен иметь поле ввода. Когда значение введено в поле и нажата кнопка ввода, это значение должно быть добавлено в список задач и отображено в браузере.

3. Каждый раз при нажатии любой задачи в списке необходимо удалить эту задачу из списка задач в компоненте Todo.

4. Напишите компонент, который принимает 2 prop, `min` и` max`, каждый раз, когда мы нажимаем на кнопку, он должен генерировать случайное число между минимальным и максимальным значениями из `prop`. Значение должно отображаться на экране при каждом нажатии. Кроме того, если случайное число является четным числом, меняйте его, если это нечетное число, не меняйте его.

5. Сделайте `GET` запрос к этому [API](https://jsonplaceholder.typicode.com/posts) и получите список сообщений. Отобразите каждую из этих данных, как показано на рисунке Вы можете выбрать стиль и сделать его лучше, чем это, но это только пример того, как данные должны быть представлены на странице. Примечание. Обязательно сделайте запрос, как только приложение откроется в браузере
![display_data_from_api_demo](https://raw.githubusercontent.com/rotimi-best/react-tutorial/master/lesson_one/assets/display_data_from_api_demo.jpg)

6. Сделайте запрос к этому [API](https://github.com/kkmkkkkk), он вернет ошибку. Убедитесь, что ваше приложение не падает, обработав ошибку, возвращенную с сервера. Покажите страницу ошибки подобную этой:
   ![error_page](https://raw.githubusercontent.com/janmisek/ember-error-handler/master/github/error-prod.png)

7. Создать Gallery компонент, который после загрузки страницы вы делаете запрос к этому [API](https://picsum.photos). Пожалуйста, прочитайте документацию по API и получите 10 изображений, и там должна быть левая и правая кнопки а изображение находится между ними, где пользователь может щелкнуть, чтобы перейти к следующему или предыдущему изображению. Каждый раз, когда нажимается кнопка, автор изображения должен отображаться под изображением, и по мере изменения изображений автор также изменяется.

8. Перепишите HTML-часть этого [веб-сайта](https://mybookmarker.glitch.me) в React Components. Вот [исходный код](https://github.com/rotimi-best/bookmarker)

9. В продолжение вопроса 8 перепишите код javascript `/ js / main.js` в свой компонент

10. Используйте методы жизненного цикла в нужных местах, где они должны быть.
