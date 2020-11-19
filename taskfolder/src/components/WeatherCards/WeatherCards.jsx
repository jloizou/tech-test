import React, { useEffect } from 'react'

const WeatherCards = (props) => {
    let  {weatherLondon, weatherBristol, weatherRome } = props

    let weatherArr = [weatherLondon, weatherBristol, weatherRome];
    useEffect(() => {
        console.log(weatherLondon.name)
    }, [])
    console.log(weatherArr)

    return (
        <div>
            <div>
                {
                    weatherArr.map((city) => { 
                        return  <div>
                                    <p>{city.name}</p>
                                    {/* <p>temperature {city.main.temp}</p>
                                    <p>min temp {city.main.temp_min}</p>
                                    <p>max temp {city.main.temp_max}</p>
                                    <p>humidity {city.main.humidity}</p> */}
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default WeatherCards
