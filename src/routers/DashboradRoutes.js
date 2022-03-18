import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreateUser from '../components/crud/CreateUser'
import ListUser from '../components/crud/ListUser'
import NavBarUser from '../components/menu/NavBarUser'
import RenderApi from '../components/RenderApi'
import InputSearchWeather from '../components/InputSearchWeather'

const DashboardRoutes = () => {
  return (
    <>  
      <NavBarUser/>
      <Routes>
          <Route path='/' element={<InputSearchWeather />}></Route>
          <Route path='/users' element={<ListUser />}></Route>
          <Route path='/add-user' element={<CreateUser />}></Route>
          <Route path='/weather-summary' element={<RenderApi />}></Route>
          <Route path='*' element={<Navigate to="/" />} />

      </Routes>
    </>
  )
}

export default DashboardRoutes