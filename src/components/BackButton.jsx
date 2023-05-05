import { useNavigate } from "react-router-dom"

export const BackButton = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
       return navigate("/");
    }

  return (
    <div>
        <button onClick={handleReturn}><i className="fa fa-arrow-left" aria-hidden="true"></i> Regresar</button>
    </div>
  )
}
