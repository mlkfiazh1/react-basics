const Pizza = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt="pizza image" />
    </div>
  );
};

export default Pizza;
