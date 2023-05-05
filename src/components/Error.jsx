
export const Error = ({message}) => {

    //Que no tenga el mismo codigo
    // que no deje que se repitan los numeros
    // que no se pueda agregar hasta que tenga una casilla seleccionada
    return (
        <div className="error-container">
            <p>{message}</p>
        </div>
    )
}
