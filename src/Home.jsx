import "./Home.css";

function NavBar() {
  return (
    <>
      <div>
        <ul id="navBar">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Turismo</a>
          </li>
          <li>
            <a href="">Gastronomia</a>
          </li>
          <li>
            <a href="">Reserva</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="Header">
        <NavBar />
        <div id="title">
          <p>Conoce</p>
          <h1>Praga</h1>
        </div>
      </header>
    </>
  );
}
