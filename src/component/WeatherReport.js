import React from 'react'
import { Button } from '@material-ui/core'
import '../component/WeatherReport.css'
const WeatherReport = ({temp,img,desc,backClickHandler}) => {
  return (
    <div className='Container'>
      <div className='output_box'> 
        <h1> Temperature {temp} °C</h1>
        <img src={`http://openweathermap.org/img/wn/${img}.png`} alt="london"/>
        <h1>{desc}</h1>
        <Button variant="contained" color="primary" onClick={backClickHandler}>
            back
        </Button>
      </div>
    </div>
  )
}

export default WeatherReport