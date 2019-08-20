# Lesson 1 - Part 2 - Component Updating - Basic lifecycle methods

## Goal

В этом уроке мы узнаем, как обновить компонент. Для этого у нас есть компонент `<Clock />`, который должен показывать нам правильное время каждую секунду.

> Когда мы передаём `<Clock />` в `ReactDOM.render()`, React вызывает конструктор компонента. Clock должен отображать текущее время, поэтому мы задаём начальное состояние this.state объектом с текущим временем.

## Steps

1. В нашем конструкторе нам нужно инициализировать наше состояние. Он будет иметь значение по умолчанию текущей даты.

    ```javascript
    constructor(props) {
        super(props)

        this.state = {
          date: new Date(),
        }
      }
    ```

2. Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting). Нам нужно устанавливать таймер всякий раз, когда это происходит. Вот поэтому нам нужен `componentDidMount()`.

    ```javascript
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), // Вызывай эту функцию каждую 1 секунду
        1000
      );
    }
    ```

3. Чтобы изменить значение в состоянии, мы должны использовать `this.setState()`

    ```javascript
    tick() {
      this.setState({
        date: new Date(),
      })
    }
    ```

4. Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting). Чтобы избежать утечки ресурсов, мы будем сбрасывать таймер при каждом «размонтировании». Для этого нам нужен `componentWillUnmount()`

    ```javascript
    componentWillUnmount() {
      clearInterval(this.timerID); // сбрасывай таймер при каждом «размонтировании»
    }
    ```

## Rules

1. Вы не должны вызывать setState() в constructor(). Если вам нужно внутреннее состояние, присвойте начальное состояние this.state прямо в конструкторе.

    ```javascript
    constructor(props) {
      super(props)
      // Неправильно - Не вызывайте здесь this.setState()!
      this.setState({ date: new Date() })

      // Правильно - Конструктор — это единственное место, где вы можете присвоить значение this.state напрямую.
      this.state = { date: new Date() }
    }
    ```

2. Не копируйте пропсы в состояние! Проблема в том, что это излишне и приводит к багам (обновления в пропе `color` не будут зафиксированы в состоянии). Вместо этого используйте `this.props.color`. Используйте данный подход, если вы намеренно хотите игнорировать обновления пропсов. В таком случае лучше переименовать проп в initialColor или defaultColor.

    ```javascript
    constructor(props) {
      super(props);
      // Не делайте этого!
      this.state = { color: props.color };
    }
    ```

## Practice

> Go to practice.js

1. Creact a child component called `FormattedDate`, this component should take date in the state as a prop and instead of displaying `<p>The time now is {this.state.date.toLocaleTimeString()}</p>` in the `Clock` component move it to the `FormattedDate` component. And then replace that `<p></p>` tag with the new component you created `<FormattedDate date={} />`
