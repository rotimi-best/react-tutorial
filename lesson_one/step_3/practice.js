function Welcome(props) {
  return <h1>Welcome {props.name} to Ossystem IT Academy</h1>;
}

// Create your FormattedDate component here

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <Welcome name="Best"/>
        <p>The time now is {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
