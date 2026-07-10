const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt="pizza image" />
      <p>{props.price}</p>
    </div>
  );
};

export default Pizza;
