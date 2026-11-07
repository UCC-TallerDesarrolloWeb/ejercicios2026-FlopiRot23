function Card({ titulo, subtitulo, children }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <div className="card-info">{children}</div>
    </div>
  )
}

export default Card
