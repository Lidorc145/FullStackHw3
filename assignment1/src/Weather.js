import React from 'react';
import './App.css';
import axios from 'axios';
import {countries} from 'country-data';

const OpenWeatherMap_Key = '0aaae74896b719e82dd8d6ff4fbd9cf5';
const defaultWeatherCity = "London";
const defaultWeatherUnit = "metric";
const unsplashApiKey = "c1kJX1fiQkVdCMLfBsmg5Jniqe06Xltsn__Zrmfz6VM";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: props.temp || null,
            description: props.description || null,
            feels_like: props.feels_like || null,
            city: props.city || defaultWeatherCity,
            country: props.country || null,
            units: props.units || defaultWeatherUnit,
            image: props.image
        };

    };

    GetWeather(city, units){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${OpenWeatherMap_Key}`
        ).then((res)=>{
            if(res.status===200) {
                this.setState({temp: res.data.main.temp, city: res.data.name, description: res.data.weather[0].description, feels_like: res.data.main.feels_like, country: countries[res.data.sys.country].name });
                this.updateBackground();
            }
        });

    }

    componentDidMount() {
        this.GetWeather(this.state.city,this.state.units);
    }

    onClickOk = () => {
        let cityName = document.getElementById('CityName').value;
        this.GetWeather(cityName, this.state.units);
        //
    };

    updateBackground(){
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.city}&client_id=${unsplashApiKey}&per_page=1`
        ).then((res)=>{
            if(res.status===200) {
                if(res.data.total > 0) {
                     this.setState({image: res.data.results[0].urls.regular});
                }
            }
        });
    }

    getUnitText(){
        if(this.state.units === "metric"){
            return "°C";
        }else{
            return "°F";
        }
    }

    render() {
        document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("+this.state.image+")";
        let locationText = `${this.state.city}, ${this.state.country}`
        let tempText = `${this.state.temp} ${this.getUnitText()}`;
        let feelsLikeText = (this.state.feels_like) ? `feels like: ${this.state.feels_like} ${this.getUnitText()}` : null;
        let descreptionText = (this.state.description) ? `${this.state.description} ` : null;

        return (
            <div className="Weather" >
                <div className="weatherForm">
                <input id="CityName" autoFocus placeholder="Enter city name" onKeyPress={(event)=>{if(event.which===13){ this.onClickOk();}}} />
                <input id="myBtn" className="submit" type="submit" value="Send"  onClick={this.onClickOk} />
                </div>
                <div className="weatherResults">
                <p>{locationText}</p>
                <p className="tempText">{tempText}</p>
                <p className="descreptionText">{descreptionText}</p>
                <p>{feelsLikeText}</p>
                </div>
            </div>
        );
    }
}


export default Weather;
