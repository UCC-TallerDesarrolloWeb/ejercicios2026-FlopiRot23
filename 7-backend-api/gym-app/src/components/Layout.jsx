import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout({ logueado, setLogueado }) {
  return (
    <>
      <Header logueado={logueado} setLogueado={setLogueado} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
