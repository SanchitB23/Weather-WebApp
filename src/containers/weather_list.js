import React, {Component} from 'react';
import {connect} from 'react-redux';  //change to container
// import {bindActionCreators } from 'redux';//change to container
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
 //ABOUT this file only cares about state

class WeatherList extends Component {
  // constructor() {
  //
  // }
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather =>weather.main.temp);
    const humidity = cityData.list.map(weather =>weather.main.humidity);
    const pressure = cityData.list.map(weather =>weather.main.pressure);
    const longitude = cityData.city.coord.lon;
    const latitude = cityData.city.coord.lat;
    return (
      <tr key = {cityName}>
        <td>
          <GoogleMap lat = {latitude} lon = {longitude}/> {cityName}
        </td>
        <td>
          <Chart data={temps} color ='red' units = 'K'/>
        </td>
        <td>
          <Chart data={pressure} color ='yellow' units = 'hPa'/>
        </td>
        <td>
          <Chart data={humidity} color ='blue' units = '%'/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className = 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchWeather},dispatch); // NOTE: takes the return value from select books and make sure it flows through all reducers
// }
function mapStateToProps({weather}) {  // Its like weather  = state.weather ES6
  return {weather};  //After ES6 above, here: weather : weather which can be in ES6 be weather
}
export default connect(mapStateToProps)(WeatherList);  // NOTE: null coz doesn't care about state change ... connnects Component with function container is waht connects Component with redux , this is how it's done
