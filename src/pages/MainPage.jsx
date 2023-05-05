import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <header>
        <h1>BINGO APP</h1>
      </header>
      <div className="options-container">
        <Link to="/create" className="button-action">
          <i className="fa-solid fa-square-plus icon-button" aria-hidden="true"></i> Crear Cartones
        </Link>
        <Link to="/play" className="button-action">
          <i className="fa-sharp fa-regular fa-circle-play icon-button" aria-hidden="true"></i> Jugar
        </Link>
      </div>
    </>
  )
}
