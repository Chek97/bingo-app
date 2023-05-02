import { CartonItem } from "../components"

export const PlayPage = () => {
  return (
    <div className="container">
      <header>
        <h1>JUGAR</h1>
      </header>
      <ul className="carton-list">
        <CartonItem title="Carton 01" />
        <CartonItem title="Carton 02" />
        <CartonItem title="Carton 03" />
        <CartonItem title="Carton 04" />
        <CartonItem title="Carton 05" />
      </ul>
      {/* CREAR COMPONENTE PARA MOSTRAR LA TABLA CON LOS VALORES */}
    </div>
  )
}
