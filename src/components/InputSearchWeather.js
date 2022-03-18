import React, { useEffect, useState } from 'react'
import { useForm } from '../hook/useForm';
import WeatherApi from './WeatherApi';
import { fetchCity } from '../helpers/geoMapApi';
import { SearchWeather, TextTitle } from '../styles/WeatherStyled';
import { FormSelect } from '../styles/RenderStyled';



const InputSearchWeather = () => {

  const [spotData, SetSpotData] = useState([])

  const [values, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(searchText);
  }

  const [long, lat] = spotData

  useEffect(() => {
    fetchCity(searchText)
      .then(dataLocation => SetSpotData(dataLocation))

  }, [searchText])

  return (
    <div>

      <TextTitle>Weather App</TextTitle>

      <FormSelect onSubmit={handleSubmit}>
        <SearchWeather
          type="search"
          placeholder="Ingresa una ciudad "
          className="me-2"
          aria-label="Search"
          name='searchText'
          onChange={handleInputChange}
        />
      </FormSelect>

      <WeatherApi
        long={long}
        lat={lat}
      />

    </div>
  )
}

export default InputSearchWeather