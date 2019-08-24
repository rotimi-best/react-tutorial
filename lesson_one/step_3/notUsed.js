class Clock extends React.Component {
  // tell react if update is necessary
  // return true/false
  // if false then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate()  will not be invoked
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }

  // invoked before initial_or_updating_render()
  // return object_or_null to_update_the_state
  // where the state depends on changes in props
  // fired on every render, regardless of the cause
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  // invoked right before the most recently rendered output is committed
  // It enables your component to capture some information from the DOM
  // (e.g. scroll position) before it is potentially changed
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.welcome} Best to Ossystem IT Academy.
          {this.state.date}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock welcome="Welcome Mr" />,
  document.getElementById("root")
);
