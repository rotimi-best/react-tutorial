class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date().toLocaleDateString()
    }
  }

  render() {
    return <h2>Welcome, {this.props.name}. Todays date is {this.state.date}</h2>;
  }
}

ReactDOM.render(
  <App name="Best"/>,
  document.getElementById('root')
);
