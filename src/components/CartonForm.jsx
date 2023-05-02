
export const CartonForm = () => {
    return (
        <div className="carton-container">
            <div className="carton-container--display">
                <h2>Llenar el carton ----</h2>
                <table className="carton-container--display__table">
                    <thead>
                        <tr>
                            <th>B</th>
                            <th>I</th>
                            <th>N</th>
                            <th>G</th>
                            <th>O</th>
                        </tr>
                    </thead>
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
                </table>
            </div>
            <form action="" className="carton-container--form">
                <div>
                    <select name="" id="" className="carton-container--form__select">
                        <option value="">Casilla</option>
                        <option value="">A1</option>
                        <option value="">A2</option>
                        <option value="">A3</option>
                        <option value="">A4</option>
                        <option value="">A5</option>
                    </select>
                    <input type="number" placeholder="Ingresa el numero" className="carton-container--form__input" />
                </div>
                <button className="carton-container--form__submit">Agregar</button>
            </form>
        </div>
    )
}
