import { useState, useEffect } from 'react'
import Card from '@components/Card'

const URL = 'http://localhost:4000'

function Actividades({ logueado }) {
  const [actividades, setActividades] = useState([])
  const [diasSemana, setDiasSemana] = useState([])

  useEffect(() => {
    const traerActividades = async () => {
      try {
        const response = await fetch(`${URL}/activities`)
        const data = await response.json()
        setActividades(data)
      } catch (error) {
        console.log('Error al traer actividades', error)
      }
    }

    const traerDias = async () => {
      try {
        const response = await fetch(`${URL}/diasSemana`)
        const data = await response.json()
        setDiasSemana(data.dias)
      } catch (error) {
        console.log('Error al traer los dias', error)
      }
    }

    traerActividades()
    traerDias()
  }, [])

  return (
    <div className="actividades">
      <h2>Actividades</h2>
      <div className="actividades-lista">
        {actividades.map((act) => (
          <Card key={act.id} titulo={act.nombre} subtitulo={act.descripcion}>
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
