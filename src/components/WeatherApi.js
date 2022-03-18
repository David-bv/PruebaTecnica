import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addWeather } from '../actions/actionWeather';
import { fetchWeather } from '../helpers/weatherApi';
import { ButtonWeather } from '../styles/WeatherStyled';
import RenderApi from './RenderApi';

const WeatherApi = ({ long, lat }) => {

  const [apiData, setApiData] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addWeather(apiData))

  }, [dispatch, apiData])

  const handleApiData = () => {
    fetchWeather(long, lat)
      .then(data => setApiData(data))
  }

  return (
    <div>
      <ButtonWeather onClick={() => handleApiData()}>
        Buscar
      </ButtonWeather>

      <RenderApi/>

    </div>
  )
}

export default WeatherApi