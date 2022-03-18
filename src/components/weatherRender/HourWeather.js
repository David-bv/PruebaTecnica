import React from 'react'
import { Table } from 'react-bootstrap'

const HourWeather = ({ hourly, option }) => {

  const dateTime = (time) => {
    let x = new Date(time * 1000)
    x = x.toLocaleTimeString('en-US')
    return x
  }

  return (
    <div>
      {
        option === 'Horas' ?
          <h5>Pronósticos por horas</h5>
          : null
      }

      {
        option === 'Horas' ?
          hourly !== undefined
            ? <div>
              <Table responsive striped bordered hover variant="dark" className='tableUser'>
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th>Estado</th>
                    <th>Temperatura</th>
                    <th>Indice uv</th>
                    <th>Nubosidad</th>
                    <th>Humedad</th>
                    <th>Presión</th>
                    <th>Sensación Térmica</th>
                    <th>Visibilidad</th>
                    <th>Velocidad del viento</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    hourly.map((w, i) => (
                      <tr key={i}>
                        <td>{dateTime(w.dt)}</td>
                        <td>{w.weather[0].description}</td>
                        <td>{w.temp} °C</td>
                        <td>{w.uvi}</td>
                        <td>{w.clouds} %</td>
                        <td>{w.humidity} %</td>
                        <td>{w.pressure}</td>
                        <td>{w.feels_like} °C</td>
                        <td>{w.visibility} °C</td>
                        <td>{(w.wind_speed * 3.6).toFixed(2)} k/h</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
            : null
          : null
      }



    </div>
  )
}

export default HourWeather