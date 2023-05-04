
export const CartonItem = ({ title, carton, setCarton, setLoading, setCartonId }) => {

    const handleClick = () => {
        setCarton(carton);
        setLoading(true);
        setCartonId(carton.id);
    }

    return (
        <li className="carton-list--item" onClick={handleClick}>
            <h3>{title}</h3>
            <table className="carton-table">
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
                        <td>{title}</td>
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
    )
}
