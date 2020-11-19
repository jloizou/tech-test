import React, { useEffect, useState} from 'react'
import WeatherCards from "../WeatherCards"

const Weather = () => {
    let [ weatherLondon, setWeatherLondon ] = useState("")
    let [ weatherBristol, setWeatherBristol ] = useState("")
    let [ weatherRome, setWeatherRome ] = useState("")
 
    useEffect(() => {
        let cityArr = [{city : "London", ftn: setWeatherLondon},
            {city : "Bristol", ftn: setWeatherBristol},
            {city : "Rome", ftn: setWeatherRome}]
        
        cityArr.forEach((city) => { 
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
            .then(res => res.json())
            .then(res => city.ftn(res))
        })
    }, []);

    return (
        <div>
            <WeatherCards 
                weatherLondon={weatherLondon}
                weatherBristol={weatherBristol}
                weatherRome={weatherRome}
            />
        </div>
    )
}

export default Weather;
