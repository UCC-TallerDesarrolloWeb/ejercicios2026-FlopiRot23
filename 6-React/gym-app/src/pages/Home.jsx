// imagenes de assets (se importan)
import funcional from '@assets/home/funcional.jpg'
import zumba from '@assets/home/zumba.jpg'

// las de public se usan directo con la ruta
const cards = [
  { titulo: 'Taekwondo', imagen: '/home/taekwondo.jpg' },
  { titulo: 'Yoga', imagen: '/home/yoga.jpg' },
  { titulo: 'Funcional', imagen: funcional },
  { titulo: 'Zumba', imagen: zumba },
]

function Home() {
  return (
    <div className="home">
      <h2>Bienvenido a GymApp</h2>
      <div className="home-cards">
        {cards.map((c) => (
          <div className="home-card" key={c.titulo}>
            <img src={c.imagen} alt={c.titulo} />
            <h3>{c.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
