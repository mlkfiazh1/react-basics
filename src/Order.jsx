import { useEffect, useState } from 'react';
import Pizza from './Pizza';
import Cart from './Cart';

export default function Order() {
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [pizzaType, setPizzaType] = useState('');
  const [selectedPizza, setSelectedPizza] = useState('');
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  useEffect(() => {
    if (pizzas.length && !pizzaType) {
      setPizzaType(pizzas[0].id);
      setSelectedPizza(pizzas[0]);
    }
  }, [pizzas]);

  async function fetchPizzaTypes() {
    const reponse = await fetch('/api/pizzas');
    const pizzaTypes = await reponse.json();
    setLoading(false);
    return setPizzas(pizzaTypes);
  }

  async function checkout() {
    setLoading(true);

    await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    });

    setLoading(false);
  }

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([...cart, { pizza: selectedPizza, size: pizzaSize }]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                id="pizza-type"
                name="pizza-type"
                onChange={(e) => {
                  setPizzaType(e.target.value);
                  setSelectedPizza(
                    pizzas.find((pizza) => pizza.id === e.target.value),
                  );
                }}
                value={pizzaType}
              >
                {pizzas.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              {selectedPizza &&
                Object.keys(selectedPizza.sizes).map((size) => (
                  <span key={size}>
                    <input
                      onChange={(e) => setPizzaSize(e.target.value)}
                      checked={pizzaSize === size}
                      type="radio"
                      name="pizza-size"
                      value={size}
                      id={`pizza-${size}`}
                    />
                    <label htmlFor={`pizza-${size}`}>{size}</label>
                  </span>
                ))}
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          <div className="order-pizza">
            {selectedPizza && (
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
                price={selectedPizza.sizes[pizzaSize]}
              />
            )}
          </div>
        </form>
      </div>
      {cart.length ? (
        <div className="cart">
          <Cart cart={cart} checkout={checkout} />
        </div>
      ) : (
        <div>
          <h1>Cart is Empty</h1>
        </div>
      )}
    </div>
  );
}
