import { useNavigate } from "react-router-dom"

export const BackButton = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
       return navigate("/");
    }

  return (
    <div className="back-button--container">
        <button onClick={handleReturn} className="back-button--button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Regresar
        </button>
    </div>
  )
}
