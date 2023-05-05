
export const CartonItem = ({ title, setCarton, cartonList, setLoading, setTitle }) => {

    const handleClick = () => {
        const cartonSelected = cartonList.find(c => c.id === title);
        setCarton(cartonSelected);
        setTitle(cartonSelected.id);
        setLoading(true);
    }

    return (
        <li className="carton-list--item" onClick={handleClick}>
            <p># {title}</p>
        </li>
    )
}
