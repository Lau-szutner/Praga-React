export default function Cards(props) {
  return (
    <>
      <div id="Cards">
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
