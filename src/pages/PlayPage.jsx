import { BackButton, CartonItem } from "../components"

export const PlayPage = () => {

  // Local storage
  let cartonList = [];
  try {
    cartonList = JSON.parse(localStorage.getItem('cartons')) || [];
  } catch (error) {
    console.log(error);
  }

  console.log(cartonList);

  return (
    <div className="container">
      <BackButton />
      <header>
        <h1>JUGAR</h1>
      </header>
      {/* {
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
      } */}
      {/* CREAR COMPONENTE PARA MOSTRAR LA TABLA CON LOS VALORES */}
      <ul className="carton-active-list">
        <li className="carton-active-list--item">
          <h5>#23</h5>
          <table className="carton-active-list--table">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>

      <div className="carton-container">
            <div className="carton-container--display">
                <h2>Carton 1</h2>
                <table className="carton-container--display__table">
                    <thead>
                        <tr>
                            <th className="table-bingo-item">B</th>
                            <th className="table-bingo-item">I</th>
                            <th className="table-bingo-item">N</th>
                            <th className="table-bingo-item">G</th>
                            <th className="table-bingo-item">O</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form className="carton-container--form">
                <label className="carton-container--form__label">Escriba el numero para la posicion marcada</label>
                <input
                    type="number"
                    placeholder="Ingresa el numero"
                    className="carton-container--form__input"
                    /* value={value}
                    name="value"
                    onChange={handleChange} */
                    required
                />
                
                <button className="carton-container--form__submit">
                    <i className="fas fa-plus-circle" aria-hidden="true"></i> Agregar
                </button>
            </form>
        </div>
    </div>
  )
}
