import Chart from '../components/chart';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
    // render a single city / row
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord; // ES6 destructuring -> pulls these properties by name from the data object.
        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
                <td><Chart data={humidities} color="purple" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);