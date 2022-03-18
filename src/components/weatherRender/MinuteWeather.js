import React from 'react'
import { Table } from 'react-bootstrap'

const MinuteWeather = ({ minutely, option }) => {

  const dateTime = (time) => {
    let x = new Date(time * 1000)
    x = x.toLocaleTimeString('en-US')
    return x
  }

  return (
    <div>
      {
        option === 'Minutos' ?
          <h5>Volumen de precipitación por minuto</h5>
          : null
      }

      {
        option === 'Minutos' ?
          minutely !== undefined
            ? <div>
              <Table responsive striped bordered hover variant="dark" className='tableUser'>
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th>volumen de precipitación</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    minutely.map((w, i) => (
                      <tr key={i}>
                        <td>{dateTime(w.dt)}</td>
                        <td>{w.precipitation}</td>
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

export default MinuteWeather