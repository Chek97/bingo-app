import { useEffect } from "react";
import { useState } from "react";
import { BackButton, CartonForm, CartonItem, Error } from "../components";
import { validateCartonIdForm } from "../helpers/formValidation";

export const CreatePage = () => {

  // Local storage
  const cartonList = [];
  try {
    const cartons = JSON.parse(localStorage.getItem('cartons')) || [];
    cartonList.push(...cartons);
  } catch (error) {
    console.log(error);
  }

  // Hooks
  const [carton, setCarton] = useState({
    id: 0,
    positions: Array.from({ length: 25 }, (_, i) => {
      if (i === 12) {
        return "0";
      } else {
        return ["", false];
      }
    })
  });
  const [cartonId, setCartonId] = useState("");
  const [loading, setLoading] = useState(false);
  const [idError, setIdError] = useState({
    ok: false,
    message: ''
  });
  const [title, setTitle] = useState(0);

  // Methods
  const handleChange = (e) => {
    setCartonId(e.target.value);
    setIdError({ ok: false, message: "" });
  };

  const handleIdForm = (e) => {
    e.preventDefault();

    if (cartonId !== "") setLoading(true);

    const error = validateCartonIdForm(cartonId, cartonList)

    if (error === "") {
      const newCarton = {
        id: +cartonId,
        positions: carton.positions.map((position, i) => i === 12 ? cartonId : position)
      }
      localStorage.setItem("cartons", JSON.stringify([...cartonList, newCarton]));
      setTitle(cartonId);
      setCartonId("");
    } else {
      setIdError({ ok: true, message: error });
    }
  }

  useEffect(() => {
    setCarton({ ...carton, id: +cartonId });
  }, [cartonId]);

  return (
    <div className="create-container">
      <BackButton />
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
          required
        />
        {idError.ok && <Error message={idError.message} />}
        <button className="carton-index--form__button">
          <i className="fa fa-plus" aria-hidden="true"></i> Agregar
        </button>
      </form>
      {
        cartonList.length > 0 && (
          <ul className="carton-list">
            {/* QUITAR COMPONENTE NO ES NECESARIO */}
            {cartonList.map(carton => (
              <CartonItem
                key={carton.id}
                title={carton.id}
                setCarton={setCarton}
                cartonList={cartonList}
                setLoading={setLoading}
                setTitle={setTitle}
              />
            ))}
          </ul>
        )
      }
      {loading && <CartonForm id={title} carton={carton} setCarton={setCarton} cartonList={cartonList} />}
    </div>
  )
}
