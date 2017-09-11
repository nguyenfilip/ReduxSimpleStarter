import axios from 'axios';

const API_KEY = '5311c7ffd62e47aa724168d61fd02252';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
//TODO is there a way to implement this without redux-promise?
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    console.log("Action executing Axios");
    const request = axios.get(url);

    return function(dispatch) {
        axios.get(url)
            .then(function(response){
                console.log("Dispatching success!");
                dispatch(
                    {
                        type:FETCH_WEATHER,
                        payload: response
                    }
                );
            });
    }
    // return {
    //     type: FETCH_WEATHER,
    //     payload: request
    // }
}