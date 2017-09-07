import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

            result.push(
                <tr key={cityData.city.name}>
                    <td>{cityData.city.name}</td>
                    <td>{cityData.city.name}</td>
                    <td>{cityData.city.name}</td>
                    <td>{cityData.city.name}</td>
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

