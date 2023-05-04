import { CartonItem } from "../components"

export const PlayPage = () => {

  // Local storage
  const cartonList = JSON.parse(localStorage.getItem('cartons')) || [];

  return (
    <div className="container">
      <header>
        <h1>JUGAR</h1>
      </header>
      {
        cartonList.length > 0 && (
          <ul className="carton-list">
            {cartonList.map(c => (
              <CartonItem
                title={`Carton ${c.id}`}
                carton={c}
                key={c.id}
              />
            ))}
          </ul>
        )
      }
      {/* CREAR COMPONENTE PARA MOSTRAR LA TABLA CON LOS VALORES */}
    </div>
  )
}
