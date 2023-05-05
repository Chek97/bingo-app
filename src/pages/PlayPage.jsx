import { useState } from "react";
import { BackButton, CartonItem, Error } from "../components"

export const PlayPage = () => {

  // Local storage
  let cartonList = [];
  try {
    cartonList = JSON.parse(localStorage.getItem('cartons')) || [];
  } catch (error) {
    console.log(error);
  }
  const [carton, setCarton] = useState({});
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState({
    ok: false,
    message: ""
  });

  const { positions } = carton || [];


  const handlePosition = (current) => {
    setCarton(current);
    setLoading(true);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    setError({
      ok: false,
      message: ""
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = (value < 0 || value > 75) ? "Debes agregar un numero entre el 1 y el 75" : "";

    if(error === "" ){
      cartonList.forEach((cartonItem) => {
        for(let i = 0; i < cartonItem.positions.length; i++){
          if(cartonItem.positions[i][0] === value && i !== 12){
            cartonItem.positions[i][1] = true;
          }
        }
      });
      
      localStorage.setItem("cartons", JSON.stringify(cartonList));
    
    }else{
      setError({
        ok: true,
        message: error
      });
    }
  } 
//ACTUALIZAR EN TIEMPO REAL LAS TABLAS Y LA TABLA NORMAL

  return (
    <div className="container">
      <BackButton />
      <header>
        <h1>JUGAR</h1>
      </header>
      <p>Cartones Activos</p>
      <ul className="carton-active-list">
        {cartonList.map(carton => (
          <li className="carton-active-list--item" key={carton.id} onClick={() => handlePosition(carton)}>
            <h5>#{carton.id}</h5>
            <table className="carton-active-list--table">
              <tbody>
                <tr>
                  <td className={carton.positions[0][1] === true && "position-cheked"}>{carton.positions[0][1]}</td>
                  <td className={carton.positions[1][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[2][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[3][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[4][1] === true && "position-cheked"}></td>
                </tr>
                <tr>
                  <td className={carton.positions[5][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[6][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[7][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[8][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[9][1] === true && "position-cheked"}></td>
                </tr>
                <tr>
                  <td className={carton.positions[10][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[11][1] === true && "position-cheked"}></td>
                  <td className="position-id"></td>
                  <td className={carton.positions[13][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[14][1] === true && "position-cheked"}></td>
                </tr>
                <tr>
                  <td className={carton.positions[15][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[16][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[17][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[18][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[19][1] === true && "position-cheked"}></td>
                </tr>
                <tr>
                  <td className={carton.positions[20][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[21][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[22][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[23][1] === true && "position-cheked"}></td>
                  <td className={carton.positions[24][1] === true && "position-cheked"}></td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
      {loading && (
        <div className="carton-container">
          <div className="carton-container--display">
            <h2>Carton #{carton.id}</h2>
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
                  <td className={positions[0][1] === true && "position-cheked"}>{positions[0][0]}</td>
                  <td className={positions[1][1] === true && "position-cheked"}>{positions[1][0]}</td>
                  <td className={positions[2][1] === true && "position-cheked"}>{positions[2][0]}</td>
                  <td className={positions[3][1] === true && "position-cheked"}>{positions[3][0]}</td>
                  <td className={positions[4][1] === true && "position-cheked"}>{positions[4][0]}</td>
                </tr>
                <tr>
                  <td className={positions[5][1] === true && "position-cheked"}>{positions[5][0]}</td>
                  <td className={positions[6][1] === true && "position-cheked"}>{positions[6][0]}</td>
                  <td className={positions[7][1] === true && "position-cheked"}>{positions[7][0]}</td>
                  <td className={positions[8][1] === true && "position-cheked"}>{positions[8][0]}</td>
                  <td className={positions[9][1] === true && "position-cheked"}>{positions[9][0]}</td>
                </tr>
                <tr>
                  <td className={positions[10][1] === true && "position-cheked"}>{positions[10][0]}</td>
                  <td className={positions[11][1] === true && "position-cheked"}>{positions[11][0]}</td>
                  <td>{positions[12]}</td>
                  <td className={positions[13][1] === true && "position-cheked"}>{positions[13][0]}</td>
                  <td className={positions[14][1] === true && "position-cheked"}>{positions[14][0]}</td>
                </tr>
                <tr>
                  <td className={positions[15][1] === true && "position-cheked"}>{positions[15][0]}</td>
                  <td className={positions[16][1] === true && "position-cheked"}>{positions[16][0]}</td>
                  <td className={positions[17][1] === true && "position-cheked"}>{positions[17][0]}</td>
                  <td className={positions[18][1] === true && "position-cheked"}>{positions[18][0]}</td>
                  <td className={positions[19][1] === true && "position-cheked"}>{positions[19][0]}</td>
                </tr>
                <tr>
                  <td className={positions[20][1] === true && "position-cheked"}>{positions[20][0]}</td>
                  <td className={positions[21][1] === true && "position-cheked"}>{positions[21][0]}</td>
                  <td className={positions[22][1] === true && "position-cheked"}>{positions[22][0]}</td>
                  <td className={positions[23][1] === true && "position-cheked"}>{positions[23][0]}</td>
                  <td className={positions[24][1] === true && "position-cheked"}>{positions[24][0]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <form className="carton-container--form" onSubmit={handleSubmit}>
            <label className="carton-container--form__label">Escriba el numero para la posicion marcada</label>
            <input
              type="number"
              placeholder="Ingresa el numero"
              className="carton-container--form__input"
              value={value}
              name="value"
              onChange={handleChange}
              required
            />
            {error.ok && <Error message={error.message} />}
            <button className="carton-container--form__submit">
              <i className="fas fa-plus-circle" aria-hidden="true"></i> Agregar
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
