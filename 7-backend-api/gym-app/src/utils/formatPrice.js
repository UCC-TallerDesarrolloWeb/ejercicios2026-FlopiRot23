// formatea un numero como precio, ej: 35000 -> $ 35.000
export const formatPrice = (precio) => {
  return '$ ' + precio.toLocaleString('es-AR')
}
