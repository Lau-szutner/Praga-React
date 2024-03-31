import "./Turismo.css";
import Cards from "../../components/Card.jsx";
import CardsDates from "../../dates.js";

export default function Turismo() {
  return (
    <section id="turismo">
      <h2 id="titulo">Turismo</h2>
      <div id="Cards-div">
        <Cards {...CardsDates[0]} />
        <Cards {...CardsDates[1]} />
        <Cards {...CardsDates[2]} />
      </div>
    </section>
  );
}
