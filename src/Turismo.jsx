import "./Turismo.css";
import tarjetas from "./dates.js";

export default function Turismo() {
  return (
    <section id="turismo">
      <h2 id="titulo">Turismo</h2>
      <div id="tarjetas-div">
        <Tarjetas {...tarjetas[0]} />
        <Tarjetas {...tarjetas[1]} />
        <Tarjetas {...tarjetas[2]} />
      </div>
    </section>
  );
}

function Tarjetas(props) {
  return (
    <>
      <div id="tarjetas">
        <img src={props.image} alt="" />
        <div id="tarjeta-interior">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
          <button>Ver mas</button>
        </div>
      </div>
    </>
  );
}
