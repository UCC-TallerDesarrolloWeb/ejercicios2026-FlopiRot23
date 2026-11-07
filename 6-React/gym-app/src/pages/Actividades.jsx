import Card from '@components/Card'
import { actividades, diasSemana } from '@data/actividades'

function Actividades({ logueado }) {
  return (
    <div className="actividades">
      <h2>Actividades</h2>
      <div className="actividades-lista">
        {actividades.map((act) => (
          <Card key={act.nombre} titulo={act.nombre} subtitulo={act.descripcion}>
            <ul>
              {act.horarios.map((h, i) => (
                <li key={i}>
                  {diasSemana[h.dia]}: {h['hora-inicio']} a {h['hora-fin']}
                </li>
              ))}
            </ul>
            {logueado && <button className="btn-inscripcion">Inscribirme</button>}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Actividades
