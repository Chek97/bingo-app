import { CartonForm, CartonItem } from "../components";

export const CreatePage = () => {
  return (
    <div className="create-container">
      <header>
        <h1>CREAR CARTONES</h1>
      </header>
      <form action="">
        <input type="text" placeholder="Numero del carton" />
        <button><i class="fa fa-plus" aria-hidden="true"></i> Agregar</button>
      </form>
      <ul className="carton-list">
        <CartonItem title="Carton 01" />
        <CartonItem title="Carton 02" />
        <CartonItem title="Carton 03" />
        <CartonItem title="Carton 04" />
        <CartonItem title="Carton 05" />
      </ul>
      <CartonForm />
    </div>
  )
}
