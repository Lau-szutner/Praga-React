import "../pages/home/Reserva";
import hotelAtosImg from "../assets/hotelAtos.jpeg";

export default function TarjetaReserva() {
  return (
    <div id="tarjetasReserva">
      <img src={hotelAtosImg} alt="" />
      <div id="reservaContenedor">
        <h3>Hotel tanto</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          ducimus autem quam incidunt blanditiis voluptatibus dolorem fugiat
          alias culpa necessitatibus voluptates molestias odio iure rem,
          veritatis molestiae laboriosam recusandae corporis.
        </p>
        <button>Ver mas</button>
      </div>
      <p id="precio">Precio: 120</p>
    </div>
  );
}
