import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@components/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import Actividades from '@pages/Actividades'
import Poke from '@pages/Poke'
import Store from '@pages/Store'

function App() {
  // guardo si el usuario esta logueado o no
  // arranca con lo que haya en localStorage para no perder la sesion al recargar
  const [logueado, setLogueado] = useState(localStorage.getItem('logueado') === 'true')

  return (
    <Routes>
      <Route path="/" element={<Layout logueado={logueado} setLogueado={setLogueado} />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login setLogueado={setLogueado} />} />
        <Route path="actividades" element={<Actividades logueado={logueado} />} />
        <Route path="poke" element={<Poke />} />
        <Route path="tienda" element={<Store logueado={logueado} />} />
      </Route>
    </Routes>
  )
}

export default App
