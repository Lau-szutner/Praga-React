import "./Home.css";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <>
      <header className="Header">
        <NavBar />
        <div id="title">
          <p>Conocé</p>
          <h1>Praga</h1>
        </div>
      </header>
    </>
  );
}
