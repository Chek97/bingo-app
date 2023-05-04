import { useEffect } from "react";
import { useState } from "react";
import { CartonForm, CartonItem } from "../components";

export const CreatePage = () => {

  // Local storage
  const cartonList = []; 
  try{
    const cartons = JSON.parse(localStorage.getItem('cartons')) || [];
    cartonList.push(...cartons);
  }catch(e){}

  // Hooks
  const [carton, setCarton] = useState({
    id: 0,
    positions: Array.from({ length: 25 }, (_, i) => i === 12 ? '0' : '')
  });
  const [cartonId, setCartonId] = useState("");
  const [loading, setLoading] = useState(false);

  // Methods
  const handleChange = (e) => setCartonId(e.target.value);

  const handleIdForm = (e) => {
    e.preventDefault();
    if (cartonId !== "") setLoading(true);

    localStorage.setItem("cartons", JSON.stringify([...cartonList, carton]));
  }

  // Effects
  useEffect(() => {
    const newPositions = carton.positions.map((position, i) => i === 12 ? cartonId : position);
    setCarton({ id: +cartonId, positions: newPositions });
  }, [cartonId]);

  return (
    <div className="create-container">
      <header>
        <h1>CREAR CARTONES</h1>
      </header>
      <form onSubmit={handleIdForm} className="carton-index--form">
        <input
          type="number"
          placeholder="Numero del carton"
          className="carton-index--form__input"
          name="cartonId"
          value={cartonId}
          onChange={handleChange}
        />
        <button className="carton-index--form__button">
          <i className="fa fa-plus" aria-hidden="true"></i> Agregar
        </button>
      </form>
      {
        cartonList.length > 0 && (
          <ul className="carton-list">
            {cartonList.map(c => (
              <CartonItem
                title={`Carton ${c.id}`}
                carton={c}
                key={c.id}
                setCarton={setCarton}
                setLoading={setLoading}
                setCartonId={setCartonId}
              />
            ))}
          </ul>
        )
      }
      {
        loading && <CartonForm id={cartonId} carton={carton} setCarton={setCarton} />
      }
    </div>
  )
}
