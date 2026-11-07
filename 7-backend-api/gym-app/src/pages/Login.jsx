import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setLogueado }) {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (usuario === 'admin' && password === 'admin') {
      console.log('Login OK')
      localStorage.setItem('logueado', 'true')
      setLogueado(true)
      navigate('/actividades')
    } else {
      console.log('Login Incorrecto')
    }
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>

        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
