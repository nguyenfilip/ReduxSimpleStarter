import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    renderWeatherLoop(cityDataArray) {
        let result = []
        for (var index = 0; index < cityDataArray.length; index++) {
            let cityData = cityDataArray[index];
            const temps = cityData.list.map( w => w.main.temp);
            const pressure = cityData.list.map( w => w.main.pressure);
            const humidity = cityData.list.map( w => w.main.humidity);
            const lon = cityData.city.coord.lon;
            const lat = cityData.city.coord.lat;

            result.push(
                <tr key={cityData.city.name}>
                    <td>
                        <GoogleMap lon = {lon} lat={lat} />
                    </td>
                    <td>
                        <Chart data={temps} color="red"/>
                    </td>
                    <td>
                        <Chart data={pressure} color="green"/>
                    </td>
                    <td>
                        <Chart data={humidity} color="orange"/>
                    </td>
                </tr>
            );
        }

        return result;
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {
                    //this.props.weather.map(this.renderWeather)
                    this.renderWeatherLoop(this.props.weather)
                }
                </tbody>
            </table>
        )
    }
}



function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);

