import React from 'react'
import { Card } from 'react-bootstrap';
import { CardRender, CardTitle, SpanText } from '../../styles/RenderStyled';


const CurrentWeather = ({ data, option }) => {
    //console.log('currentProp', data);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const date = (time) => { 
       let x = new Date( time * 1000)
       x = x.toLocaleDateString(undefined, options)
        return x
    }

    const dateTime = (time) => { 
        let x = new Date( time * 1000)
        x = x.toLocaleTimeString('en-US')
         return x
    }
    /* console.log(date.toUTCString());  */

    return (
        <div>

            {
                option === 'Ahora' ?
                    <h5>Pronóstico Diario</h5>
                : null
            }

            {
                option === 'Ahora' ?
                    data !== undefined
                        ? <div>
                            <CardRender style={{ width: '20rem' }}>
                                <Card.Img variant="top" src='https://res.cloudinary.com/david-b/image/upload/v1647566025/AG/descarga_lzisfn.png' className='LogoCard'/>
                                <Card.Body>
                                    <Card.Title><CardTitle>{date(data.dt)}, {dateTime(data.dt)}</CardTitle></Card.Title>
                                    <Card.Text>
                                        <SpanText><strong>Estado: </strong>{data.weather[0].description}</SpanText>
                                        <SpanText><strong>Temperatura: </strong>{data.temp} °C</SpanText>
                                        <SpanText><strong>Indice uv: </strong>{data.uvi }</SpanText>
                                        <SpanText><strong>Nubosidad: </strong>{data.clouds}%</SpanText>
                                        <SpanText><strong>Humedad: </strong>{data.humidity}%</SpanText>
                                        <SpanText><strong>Presión: </strong>{data.pressure}</SpanText>
                                        <SpanText><strong>Temperatura: </strong>{data.temp} °C</SpanText>
                                        <SpanText><strong>Sensación Térmica: </strong>{data.feels_like} °C</SpanText>
                                        <SpanText><strong>Visibilidad: </strong>{data.visibility}</SpanText>
                                        <SpanText><strong>Velocidad del viento: </strong>{(data.wind_speed * 3.6).toFixed(2)} k/h</SpanText>
                                    </Card.Text>
                                </Card.Body>
                            </CardRender>

                        </div>
                        : null
                    : null
            }




            {/* <p>Hora Actual:{dt} </p>
            <p>Nubosidad: {clouds}%</p>
            <p>Humedad:{humidity}%</p>
            <p>Presión:{pressure}</p>
           
            <p>Temperatura: {temp}°C</p>
            <p>Sensación Térmica: {feels_like}°C</p>
      
            <p>Visibilidad: {visibility}</p>
            <p>Velocidad del viento: {wind_speed * 3.6}k/h</p> */}
        </div>
    )
}

export default CurrentWeather