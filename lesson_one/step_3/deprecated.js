class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Should be called as UNSAFE_componentWillMount until version 17
  // invoked just before mounting occurs before render
  // no need to update state here, use the constructor instead
  componentWillMount() {}

  // Should now be call UNSAFE_componentWillReceiveProps until version 17
  // invoked before a mounted component receives new props
  componentWillReceiveProps(nextProps) {}

  // Should be called UNSAFE_componentWillUpdate until version 17
  // invoked just before rendering when new props or state are being received
  componentWillUpdate(nextProps, nextState) {}

  handleClick = () => {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.welcome} Best to Ossystem IT Academy.</h1>
        <button onClick={this.handleClick}>Update Date</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock welcome="Welcome Mr" />,
  document.getElementById("root")
);
