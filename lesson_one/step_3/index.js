class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      date: ""
    };
  }

  /* ==============================         USED     ========================== */
  // No argument
  // Called after mounted
  // Can use setState
  // triggers rerender
  componentDidMount() {}

  // 3 argument
  // after updating occurs
  // not_called_for_d_initial_render
  // Can use setState
  // Wrap setState_in condition
  // Makesure_you compare props
  // will not be invoked if shouldComponentUpdate returns false
  // getSnapshotBeforeUpdate() { return snapshot } => snapshot
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("updated");
  }

  // Immediately before unmount_or_destroyed
  // cleanup in this method
  // invalidating timers, canceling network requests, cleaning up any subscriptions from componentDidMount().
  componentWillUnmount() {
    console.log("component will unmount");
  }

  /* ============================       DO NOT USE (Deprecated)     ========================== */

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
        <h1>
          {this.props.welcome} Best to Ossystem IT Academy.
          {this.state.date}
        </h1>
        <button onClick={this.handleClick}>Update Date</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock welcome="Welcome Mr" />,
  document.getElementById("root")
);
