import "./App.css";
import Weather from "./app_component/weather.component";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./app_component/form.component";

const API_key = "c0sgwdhitqeBGu0dlQsBDBeJ7tT2";
//api key;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      imageURL: undefined,
      battingStyle: undefined,
      bowlingStyle: undefined,
      born: undefined,
      majorTeams: undefined,
      currentAge: undefined,
      bowlingStyle: undefined,
      vatan: undefined,
      fifties: undefined,
      hundreds: undefined,
      sixes: undefined,
      fours: undefined,
      highestScore: undefined,
      innings: undefined,
      strikeRate: undefined,
      avg: undefined,
      runs: undefined,
      wickets: undefined,
      eco: undefined,
      fiveInMatch: undefined,
      threeInMatch: undefined,
      balls: undefined,
      fifties1: undefined,
      hundreds1: undefined,

      highestScore1: undefined,
      innings1: undefined,
      strikeRate1: undefined,
      avg1: undefined,
      runs1: undefined,
      wickets1: undefined,
      eco1: undefined,
      balls1: undefined,
      fifties2: undefined,
      hundreds2: undefined,

      highestScore2: undefined,
      innings2: undefined,
      strikeRate2: undefined,
      avg2: undefined,
      runs2: undefined,
      wickets2: undefined,
      eco2: undefined,
      balls2: undefined,
      error: false
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  get_Weathericon(icons, rangeid) {
    switch (true) {
      case rangeid >= 200 && rangeid <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeid >= 300 && rangeid <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeid >= 500 && rangeid <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeid >= 600 && rangeid <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeid >= 701 && rangeid <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeid === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeid >= 801 && rangeid <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icons: this.weatherIcon.Clouds });
    }
  }
  getWeather = async e => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    var country = e.target.elements.country.value;
    city = city[0].toUpperCase() + city.slice(1);
    country = country[0].toUpperCase() + country.slice(1);

    if (city && country) {
      const api_call = await fetch(
        `https://cricapi.com/api/playerFinder?apikey=${API_key}&name=${city}%20${country}`
      );

      const response = await api_call.json();
      console.log(response);
      let array = response.data;
      let uid;
      for (let i = 0; i < array.length; i++) {
        console.log(array[0]);
        if (city + " " + country === array[i].name) {
          uid = array[i].pid;
          break;
        }
      }
      console.log(uid);
      const api_call1 = await fetch(
        `https://cricapi.com/api/playerStats?apikey=${API_key}&pid=${uid}`
      );
      const response1 = await api_call1.json();

      console.log(response1);
      console.log("ali");
      console.log(response1.data.bowling.ODIs.Runs);
      this.setState({
        description: response1.profile,
        imageURL: response1.imageURL,
        city: city,
        country: country,
        battingStyle: response1.battingStyle,
        bowlingStyle: response1.bowlingStyle,
        born: response1.born,
        majorTeams: response1.majorTeams,
        currentAge: response1.currentAge,
        bowlingStyle: response1.bowlingStyle,
        vatan: response1.country,
        position: response1.playingRole,
        fifties: response1.data.batting.tests[50],
        hundreds: response1.data.batting.tests[100],
        sixes: undefined,
        fours: undefined,
        highestScore: response1.data.batting.tests.HS,
        innings: response1.data.batting.tests.Inns,
        strikeRate: response1.data.bowling.tests.SR,
        avg: response1.data.batting.tests.Ave,
        runs: response1.data.bowling.tests.Runs,
        wickets: response1.data.bowling.tests.Wkts,
        eco: response1.data.bowling.tests.Econ,
        fiveInMatch: undefined,
        threeInMatch: undefined,
        balls: response1.data.bowling.tests.Balls,
        fifties1: response1.data.batting.ODIs[50],
        hundreds1: response1.data.batting.ODIs[100],
        highestScore1: response1.data.batting.ODIs.HS,
        innings1: response1.data.batting.ODIs.Inns,
        strikeRate1: response1.data.bowling.ODIs.SR,
        avg1: response1.data.batting.ODIs.Ave,
        runs1: response1.data.bowling.ODIs.Runs,
        wickets1: response1.data.bowling.ODIs.Wkts,
        eco1: response1.data.bowling.ODIs.Econ,
        balls1: response1.data.bowling.ODIs.Balls,
        fifties2: response1.data.batting.T20Is[50],
        hundreds2: response1.data.batting.T20Is[100],
        highestScore2: response1.data.batting.T20Is.HS,
        innings2: response1.data.batting.T20Is.Inns,
        strikeRate2: response1.data.bowling.T20Is.SR,
        avg2: response1.data.batting.T20Is.Ave,
        runs2: response1.data.bowling.T20Is.Runs,
        wickets2: response1.data.bowling.T20Is.Wkts,
        eco2: response1.data.bowling.T20Is.Econ,
        balls2: response1.data.bowling.T20Is.Balls
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          imageURL={this.state.imageURL}
          description={this.state.description}
          battingStyle={this.state.battingStyle}
          bowlingStyle={this.state.bowlingStyle}
          born={this.state.born}
          majorTeams={this.state.majorTeams}
          currentAge={this.state.currentAge}
          bowlingStyle={this.state.bowlingStyle}
          vatan={this.state.vatan}
          position={this.state.position}
          runs={this.state.runs}
          wickets={this.state.wickets}
          strikeRate={this.state.strikeRate}
          eco={this.state.eco}
          highestScore={this.state.highestScore}
          avg={this.state.avg}
          fifties={this.state.fifties}
          hundreds={this.state.hundreds}
          fiveInMatch={this.state.fiveInMatch}
          threeInMatch={this.state.threeInMatch}
          balls={this.state.balls}
          fours={this.state.fours}
          sixes={this.state.sixes}
          innings={this.state.innings}
          wickets={this.state.wickets}
          strikeRate={this.state.strikeRate}
          eco={this.state.eco}
          highestScore={this.state.highestScore}
          avg={this.state.avg}
          fifties1={this.state.fifties1}
          hundreds1={this.state.hundreds1}
          fiveInMatch1={this.state.fiveInMatch1}
          threeInMatch1={this.state.threeInMatch1}
          balls1={this.state.balls1}
          innings1={this.state.innings1}
          runs1={this.state.runs1}
          wickets1={this.state.wickets1}
          strikeRate1={this.state.strikeRate1}
          eco1={this.state.eco1}
          highestScore1={this.state.highestScore1}
          avg1={this.state.avg1}
          fifties2={this.state.fifties2}
          hundreds2={this.state.hundreds2}
          fiveInMatch2={this.state.fiveInMatch2}
          threeInMatch2={this.state.threeInMatch2}
          balls2={this.state.balls2}
          innings2={this.state.innings2}
          runs2={this.state.runs2}
          wickets2={this.state.wickets2}
          strikeRate2={this.state.strikeRate2}
          eco2={this.state.eco2}
          highestScore2={this.state.highestScore2}
          avg2={this.state.avg1}
        />
      </div>
    );
  }
}

export default App;
