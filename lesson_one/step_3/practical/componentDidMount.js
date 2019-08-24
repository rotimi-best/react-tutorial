class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      weather: "",
      defaultTemp: this.props.defaultTemprature
    };
  }

  // No argument
  // Called after mounted
  // Can use setState
  // triggers rerender
  async componentDidMount() {
    console.log("fetching.........");
    const weather = await this.fetchWeatherData();

    console.log("fetched", weather);
    this.setState({ loading: false, weather });
  }

  fetchWeatherData() {
    return new Promise((res, rej) =>
      setTimeout(() => {
        let weather = Math.floor(Math.random() * 30) + 25;
        res(`${weather} degree celcius`);
      }, 1000)
    );
  }

  render() {
    return (
      <div>
        <h1>The weather now is {this.state.defaultTemp}.</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather defaultTemprature={36} />,
  document.getElementById("root")
);
