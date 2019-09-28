# Lesson 1 - Part 1 - Component Rendering - Display state & props

## Goal

In this lesson we will learn how to display your state and props in your html.

## Steps

1. `constructor(props)`: Вы можете не использовать конструктор в React-компоненте, если вы не определяете состояние или не привязываете методы. Конструктор компонента React вызывается до того, как компонент будет примонтирован.

2. `super(props)`: В начале конструктора необходимо вызывать super(props). Если это не сделать, this.props не будет определён. Это может привести к багам.

3. `this.state = {}`: Мы инициализируем наше состояние в конструкторе как javascript объекта, а затем указываем виды данных, которые мы хотим сохранить.

4. `render(){}`:

   - Eдинственный обязательный метод в классовом компоненте.
   - Обычно создаётся с помощью JSX. Указывает React, что рендерить: DOM-узел или пользовательский компонент. Например, `<div />` или `<MyComponent />`
   - Функция render() должна быть чистой. Это означает, что она не изменяет состояние компонента, всегда возвращает один и тот же результат, не взаимодействует напрямую с браузером.

5. `{this.props.name}` и `{this.state.name}`: Если вы хотите поместить javascript в html, вам нужно обернуть его вокруг фигурных скобок.

## Practice

> Use a Create React App for each question.

1.  Convert this html code into one component and call it App, in such a way that everything inside the body tag is wrapped inside a react component. Make sure your component runs without any bug

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Page Title</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div class="header">
          <h1>My Website</h1>
          <p>A <b>responsive</b> website created by me.</p>
        </div>

        <div class="navbar">
          <a href="#" class="active">Home</a>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <a href="#" class="right">Link</a>
        </div>

        <div class="row">
          <div class="side">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div>Image</div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div>Image</div>
            <br />
            <div>Image</div>
            <br />
            <div>Image</div>
          </div>
          <div class="main">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <br />
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div class="footer">
          <h2>Footer</h2>
        </div>
      </body>
    </html>
    ```

2.  Break this App component into smaller components. To help you break them into children components pay attention to the names of the classes for each div in the <body></body>.

3.  In this App component below remove the h1 tag and move it into the WelcomeUser component and instead of using the name John, let the name be passed into the WelcomeUser component from the App component as a prop.

    ```javascript
    // Parent Component
    class App extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return (
                <div>
                    <h1>Welcome Mr John</h1>
                    <p>What do you want me to do for you today?<p/>
                    <p>It is {new Date().toLocaleTimeString()}</p>
                </div>
            )
        }
    }

    // Child component
    function WelcomeUser() {
        // move the h1 here
    }
    ```
