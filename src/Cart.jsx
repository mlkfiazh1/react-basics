const Cart = ({ cart, checkout }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.pizza.id}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.pizza.sizes[item.size]}</span>
          </li>
        ))}
      </ul>
      <p>
        Total:{' '}
        {cart.reduce(function (runningTotal, c) {
          return runningTotal + c.pizza.sizes[c.size];
        }, 0)}
      </p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
