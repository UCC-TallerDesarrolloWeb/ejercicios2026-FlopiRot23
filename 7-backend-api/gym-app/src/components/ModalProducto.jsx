import { formatPrice } from '@utils/formatPrice'

const IMG_URL = 'https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/'

function ModalProducto({ producto, cerrar }) {
  return (
    <div className="modal-fondo">
      <div className="modal">
        <button className="modal-cerrar" onClick={cerrar}>X</button>
        <img src={`${IMG_URL}${producto.imagen}`} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p><b>Marca:</b> {producto.marca}</p>
        <p><b>Categoría:</b> {producto.categoria}</p>
        <p><b>Talles:</b> {producto.talle.join(', ')}</p>
        <p className="precio">{formatPrice(producto.precio)}</p>
      </div>
    </div>
  )
}

export default ModalProducto
