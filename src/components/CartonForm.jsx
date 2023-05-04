import { useState } from "react";
import { Error } from "./Error";

export const CartonForm = ({ id, carton, setCarton }) => {

    const { positions } = carton;
    const [position, setPosition] = useState(0);
    const [mark, setMark] = useState(0);
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");

    const handlePostion = (id) => {
        setPosition(id);
        setMark(id);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const getMarkClass = (id) =>  `position-value ${ mark === id && 'marked'}`;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Todo: validar numeros
        const newPositions = positions.map((p, i) => (position === i ? value : p));
        setCarton({
            ...carton,
            positions: newPositions
        });
        
        const increment = position === 24 ? 0 : position == 11 ? 2 : 1;
        handlePostion(position + increment);
        setValue("");
    }
    console.log("Valor", mark, getMarkClass(mark), typeof mark);

    return (
        <div className="carton-container"> valor {mark}
            <div className="carton-container--display">
                <h2>Carton <span>#{id}</span></h2>
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
                            <td onClick={() => handlePostion(0)} className={getMarkClass(0)}>{positions[0]}</td>
                            <td onClick={() => handlePostion(1)} className={getMarkClass(1)}>{positions[1]}</td>
                            <td onClick={() => handlePostion(2)} className={getMarkClass(2)}>{positions[2]}</td>
                            <td onClick={() => handlePostion(3)} className={getMarkClass(3)}>{positions[3]}</td>
                            <td onClick={() => handlePostion(4)} className={getMarkClass(4)}>{positions[4]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(5)} className={getMarkClass(5)}>{positions[5]}</td>
                            <td onClick={() => handlePostion(6)} className={getMarkClass(6)}>{positions[6]}</td>
                            <td onClick={() => handlePostion(7)} className={getMarkClass(7)}>{positions[7]}</td>
                            <td onClick={() => handlePostion(8)} className={getMarkClass(8)}>{positions[8]}</td>
                            <td onClick={() => handlePostion(9)} className={getMarkClass(9)}>{positions[9]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(10)} className={getMarkClass(10)}>{positions[10]}</td>
                            <td onClick={() => handlePostion(11)} className={getMarkClass(11)}>{positions[11]}</td>
                            <td className="position-value">{positions[12]}</td>
                            <td onClick={() => handlePostion(13)} className={getMarkClass(13)}>{positions[13]}</td>
                            <td onClick={() => handlePostion(14)} className={getMarkClass(14)}>{positions[14]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(15)} className={getMarkClass(15)}>{positions[15]}</td>
                            <td onClick={() => handlePostion(16)} className={getMarkClass(16)}>{positions[16]}</td>
                            <td onClick={() => handlePostion(17)} className={getMarkClass(17)}>{positions[17]}</td>
                            <td onClick={() => handlePostion(18)} className={getMarkClass(18)}>{positions[18]}</td>
                            <td onClick={() => handlePostion(19)} className={getMarkClass(19)}>{positions[19]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => handlePostion(20)} className={getMarkClass(20)}>{positions[20]}</td>
                            <td onClick={() => handlePostion(21)} className={getMarkClass(21)}>{positions[21]}</td>
                            <td onClick={() => handlePostion(22)} className={getMarkClass(22)}>{positions[22]}</td>
                            <td onClick={() => handlePostion(23)} className={getMarkClass(23)}>{positions[23]}</td>
                            <td onClick={() => handlePostion(24)} className={getMarkClass(24)}>{positions[24]}</td>
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
                {error && <Error />}
                <button className="carton-container--form__submit">
                    <i className="fas fa-plus-circle" aria-hidden="true"></i> Agregar
                </button>
            </form>
        </div>
    )
}
