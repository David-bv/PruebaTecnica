import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FormSelect } from '../styles/RenderStyled';
import CurrentWeather from './weatherRender/CurrentWeather';
import DailyWeather from './weatherRender/DailyWeather';
import HourWeather from './weatherRender/HourWeather';
import MinuteWeather from './weatherRender/MinuteWeather';

const RenderApi = () => {

    const { weatherData } = useSelector(store => store.weather)

    const [select, setSelect] = useState('Seleeciona el clima')

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }
 
    return (
        <div>
            <FormSelect>
                <Form.Select
                    size="sm"
                    aria-label="Default select example"
                    value={select}
                    onChange={handleSelect}
                >
                    <option >Selecciona el clima</option>
                    <option >Ahora</option>
                    <option >Minutos</option>
                    <option >Horas</option>
                    <option >Semanal</option>
                </Form.Select>
            </FormSelect>

            {
                weatherData.map((w, i) => (
                    <CurrentWeather data={w.current} option={select} key={i} />
                ))
            }

            {
                weatherData.map((w, i) => (
                    <DailyWeather daily={w.daily} option={select} key={i} />

                ))
            }

            {
                weatherData.map((w, i) => (
                    <HourWeather hourly={w.hourly} option={select} key={i} />
                ))
            }

            {
                weatherData.map((w, i) => (
                    <MinuteWeather minutely={w.minutely} option={select} key={i} />
                ))
            }

        </div>
    )
}

export default RenderApi