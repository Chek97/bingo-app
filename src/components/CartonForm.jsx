import { useState } from "react";
import { Error } from "./Error";

export const CartonForm = ({ id, carton, setCarton }) => {

    const { positions } = carton;
    const [position, setPosition] = useState(0);
    const [mark, setMark] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");

    const handlePostion = (id) => {
        setPosition(id);
        setMark(true);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Todo: validar numeros
        const newPositions = positions.map((p, i) => {
            if(i === position){
                return value;
            }else{
                return p;
            }
        });
        setCarton({
            ...carton,
            positions: newPositions
        });
    }

    return (
        <div className="carton-container">
            <div className="carton-container--display">
                <h2>Carton <span>#{id}</span></h2>
                <table className="carton-container--display__table">
                    <thead>
                        <tr>
                            <th className="table-bingo-item">B</th>
                            <th  className="table-bingo-item">I</th>
                            <th className="table-bingo-item">N</th>
                            <th className="table-bingo-item">G</th>
                            <th className="table-bingo-item">O</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td onClick={() => handlePostion(0)} className={`position-value marked`}>{positions[0]}</td>
                            <td onClick={() => handlePostion(1)} className="position-value marked">{positions[1]}</td>
                            <td onClick={() => handlePostion(2)} className="position-value marked">{positions[2]}</td>
                            <td onClick={() => handlePostion(3)} className="position-value marked">{positions[3]}</td>
                            <td onClick={() => handlePostion(4)} className="position-value marked">{positions[4]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(5)} className="position-value marked">{positions[5]}</td>
                            <td onClick={() => handlePostion(6)} className="position-value marked">{positions[6]}</td>
                            <td onClick={() => handlePostion(7)} className="position-value marked">{positions[7]}</td>
                            <td onClick={() => handlePostion(8)} className="position-value marked">{positions[8]}</td>
                            <td onClick={() => handlePostion(9)} className="position-value marked">{positions[9]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(10)} className="position-value marked">{positions[10]}</td>
                            <td onClick={() => handlePostion(11)} className="position-value marked">{positions[11]}</td>
                            <td className="position-value">{positions[12]}</td>
                            <td onClick={() => handlePostion(13)} className="position-value marked">{positions[13]}</td>
                            <td onClick={() => handlePostion(14)} className="position-value marked">{positions[14]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(15)} className="position-value marked">{positions[15]}</td>
                            <td onClick={() => handlePostion(16)} className="position-value marked">{positions[16]}</td>
                            <td onClick={() => handlePostion(17)} className="position-value marked">{positions[17]}</td>
                            <td onClick={() => handlePostion(18)} className="position-value marked">{positions[18]}</td>
                            <td onClick={() => handlePostion(19)} className="position-value marked">{positions[19]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(20)} className="position-value marked">{positions[20]}</td>
                            <td onClick={() => handlePostion(21)} className="position-value marked">{positions[21]}</td>
                            <td onClick={() => handlePostion(22)} className="position-value marked">{positions[22]}</td>
                            <td onClick={() => handlePostion(23)} className="position-value marked">{positions[23]}</td>
                            <td onClick={() => handlePostion(24)} className="position-value marked">{positions[24]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form onSubmit={handleSubmit} className="carton-container--form">
                    <label className="carton-container--form__label">Escriba el numero para la posicion marcada</label>
                    <input 
                        type="number" 
                        placeholder="Ingresa el numero" 
                        className="carton-container--form__input" 
                        value={value}
                        name="value"
                        onChange={handleChange}
                    />
                    {error &&<Error />}
                    <button className="carton-container--form__submit">Agregar</button>
            </form>
        </div>
    )
}
