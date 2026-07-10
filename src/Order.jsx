import { useEffect, useState } from 'react';
import Pizza from './Pizza';

export default function Order() {
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [pizzaType, setPizzaType] = useState('');
  const [selectedPizza, setSelectedPizza] = useState('');
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
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
  );
}
