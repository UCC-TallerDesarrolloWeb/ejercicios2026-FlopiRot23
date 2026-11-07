import { Link, useNavigate } from 'react-router-dom'

function Header({ logueado, setLogueado }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('logueado')
    setLogueado(false)
    navigate('/login')
  }

  return (
    <header className="header">
      <h1 className="header-logo">GymApp</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/actividades">Actividades</Link>
        {logueado && (
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header
