import { useState, useEffect } from 'react'
import ModalProducto from '@components/ModalProducto'
import { formatPrice } from '@utils/formatPrice'

const URL = 'http://localhost:4001'
const IMG_URL = 'https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/'

function Store({ logueado }) {
  const [productos, setProductos] = useState([])
  const [seleccionado, setSeleccionado] = useState(null)

  useEffect(() => {
    const traerProductos = async () => {
      try {
        const response = await fetch(`${URL}/productos`)
        const data = await response.json()
        setProductos(data)
      } catch (error) {
        console.log('Error al traer productos', error)
      }
    }

    traerProductos()
  }, [])

  const agregarAlCarrito = (producto) => {
    // guardo el carrito en localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    carrito.push(producto.id)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert(`${producto.nombre} agregado al carrito`)
  }

  return (
    <div className="store">
      <h2>Tienda</h2>
      <div className="store-lista">
        {productos.map((prod) => (
          <div className="producto" key={prod.id}>
            <img src={`${IMG_URL}${prod.imagen}`} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p className="precio">{formatPrice(prod.precio)}</p>
            <button onClick={() => setSeleccionado(prod)}>Ver detalle</button>
            {logueado && (
              <button className="btn-agregar" onClick={() => agregarAlCarrito(prod)}>
                Agregar al carrito
              </button>
            )}
          </div>
        ))}
      </div>

      {seleccionado && (
        <ModalProducto producto={seleccionado} cerrar={() => setSeleccionado(null)} />
      )}
    </div>
  )
}

export default Store
