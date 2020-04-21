import React from "react";
import "weather-icons/css/weather-icons.css";
import "./weather.style.css";
const Weather = props => {
  return (
    <div className="container">
      {props.description ? (
        <div className="jumbotron">
          <div className="row">
            <div class="media">
              <div className="col-1 d-flex flex-row">
                <img
                  src={props.imageURL}
                  class="align-self-start mr-1 "
                  alt="..."
                ></img>
              </div>
              <div className="col-10 d-flex flex-row-reverse p-3">
                <div class="media-body p-3">
                  <h3 class="text-left font-weight-bold">
                    {props.city} {props.country}
                  </h3>
                  <p className="text-left">{props.description}</p>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Born : </p>
                <p>{props.born}</p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Country : </p>
                <p>{props.vatan}</p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Playing Order : </p>
                <p>{props.position}</p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Batting Style : </p>
                <p>{props.battingStyle}</p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Major Teams : </p>
                <p>{props.majorTeams}</p>
              </div>
              <div className="d-flex justify-content-start">
                <p className="font-weight-bold p-0">Bolwing Style : </p>
                <p>{props.bowlingStyle}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div class="card">
                  <img
                    src="https://images.fineartamerica.com/images-medium-large-5/cricket-player-batsman-batting-kneel-cartoon-aloysius-patrimonio.jpg"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h2 class="card-title">Test Matches Career</h2>
                    <p class="card-text">
                      <table class="table table-sm table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Runs</th>
                            <td scope="col">{props.runs}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Innings</th>
                            <td>{props.innings}</td>
                          </tr>
                          <tr>
                            <th scope="row">Strike Rate</th>

                            <td>{props.strikeRate}</td>
                          </tr>
                          <tr>
                            <th scope="row">Average</th>

                            <td>{props.avg}</td>
                          </tr>
                          <tr>
                            <th scope="row">Highest Score</th>

                            <td>{props.highestScore}</td>
                          </tr>

                          <tr>
                            <th scope="row">Hundreds</th>

                            <td>{props.hundreds}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fiftys</th>

                            <td>{props.fifties}</td>
                          </tr>
                          <tr>
                            <th scope="row">Wickets</th>

                            <td>{props.wickets}</td>
                          </tr>
                          <tr>
                            <th scope="row">Economy</th>

                            <td>{props.eco}</td>
                          </tr>
                          <tr>
                            <th scope="row">Balls (As Bowler)</th>

                            <td>{props.balls}</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                    <a href="#" class="btn btn-primary">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div class="card">
                  <img
                    src="https://myrealdomain.com/images/animated-cricket-clipart.jpg"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h2 class="card-title">ODI Matches Career</h2>
                    <p class="card-text">
                      <table class="table table-sm table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Runs</th>
                            <td scope="col">{props.runs1}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Innings</th>
                            <td>{props.innings1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Strike Rate</th>

                            <td>{props.strikeRate1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Average</th>

                            <td>{props.avg1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Highest Score</th>

                            <td>{props.highestScore1}</td>
                          </tr>

                          <tr>
                            <th scope="row">Hundreds</th>

                            <td>{props.hundreds1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fiftys</th>

                            <td>{props.fifties1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Wickets</th>

                            <td>{props.wickets1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Economy</th>

                            <td>{props.eco1}</td>
                          </tr>
                          <tr>
                            <th scope="row">Balls (As Bowler)</th>

                            <td>{props.balls1}</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                    <a href="#" class="btn btn-primary">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div class="card">
                  <img
                    src="https://images.fineartamerica.com/images-medium-large-5/india-cricket-player-batsman-batting-cartoon-aloysius-patrimonio.jpg"
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h2 class="card-title">T20 Matches Career</h2>
                    <p class="card-text">
                      <table class="table table-sm table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Runs</th>
                            <td scope="col">{props.runs2}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Innings</th>
                            <td>{props.innings2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Strike Rate</th>

                            <td>{props.strikeRate2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Average</th>

                            <td>{props.avg2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Highest Score</th>

                            <td>{props.highestScore2}</td>
                          </tr>

                          <tr>
                            <th scope="row">Hundreds</th>

                            <td>{props.hundreds2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fiftys</th>

                            <td>{props.fifties2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Wickets</th>

                            <td>{props.wickets2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Economy</th>

                            <td>{props.eco2}</td>
                          </tr>
                          <tr>
                            <th scope="row">Balls(As Bowler)</th>

                            <td>{props.balls2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                    <a href="#" class="btn btn-primary">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Weather;
