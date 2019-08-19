# Lesson 1 - Component Rendering - Display state & props

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

> Go to practice.js

1. Change the text from `Welcome Best` to `Welcome my best friend <Your Name>`. `<Your Name>` means that instead of passing `Best` as a prop pass in your name.

2. Make the prop be in a h1 `<h1></h1>` and then the state in a p tag `<p></p>`. It should look like this

```html
<h1>Welcome Best</h1>
<p>Todays date is 8/19/2019</p>
```
