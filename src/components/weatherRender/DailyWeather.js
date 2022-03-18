import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { CardRender, CardTitle, SpanText } from '../../styles/RenderStyled';

const DailyWeather = ({ daily = [], option }) => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const date = (time) => {
        let x = new Date(time * 1000)
        x = x.toLocaleDateString(undefined, options)
        return x
    }

    return (
        <div>

            {
                option === 'Semanal' ?
                    <h5>Pronósticos de la semana</h5>
                    : null
            }

            {
                option === 'Semanal' ?
                    daily !== undefined
                        ? daily.map((w, i) => (
                            <div key={i}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey={i}>
                                        <Accordion.Header><CardTitle>{date(w.dt)}</CardTitle></Accordion.Header>
                                        <Accordion.Body>
                                            <CardRender style={{ width: '20rem' }}>
                                                <Card.Body>
                                                    <Card.Text>
                                                        <SpanText><strong>Estado: </strong>{w.weather[0].description}</SpanText>
                                                        <SpanText><strong>Temperatura Día: </strong>{w.temp.day} °C</SpanText>
                                                        <SpanText><strong>Temperatura Tarde: </strong>{w.temp.eve } °C</SpanText>
                                                        <SpanText><strong>Temperatura Noche: </strong>{w.temp.night } °C</SpanText>
                                                        <SpanText><strong>Temperatura Mínima: </strong>{w.temp.night } °C</SpanText>
                                                        <SpanText><strong>Temperatura Máxima: </strong>{w.temp.night } °C</SpanText>
                                                        <SpanText><strong>Indice uv: </strong>{w.uvi}</SpanText>
                                                        <SpanText><strong>Nubosidad: </strong>{w.clouds}%</SpanText>
                                                        <SpanText><strong>Humedad: </strong>{w.humidity}%</SpanText>
                                                        <SpanText><strong>Presión: </strong>{w.pressure}</SpanText>
                                                        <SpanText><strong>Velocidad del viento: </strong>{(w.wind_speed * 3.6).toFixed(2)} k/h</SpanText>
                                                    </Card.Text>
                                                </Card.Body>
                                            </CardRender>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        ))
                        : null
                    : null
            }

        </div>
    )
}

export default DailyWeather