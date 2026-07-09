import { useEffect, useState } from 'react';

export default function Order() {
  const [pizzaSize, setPizzaSize] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [pizzaType, setPizzaType] = useState('');

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    const reponse = await fetch('/api/pizzas');
    const pizzaTypes = await reponse.json();
    return setPizzas(pizzaTypes);
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
              onChange={(e) => setPizzaType(e.target.value)}
              value={pizzaType}
            >
              {pizzas.map((pizza) => (
                <option key={pizza.id} value={pizza.name}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>

          <div onChange={(e) => setPizzaSize(e.target.value)}>
            <label htmlFor="pizza-size">Pizza Size</label>
            <span>
              <input
                checked={pizzaSize === 'S'}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                checked={pizzaSize === 'M'}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                checked={pizzaSize === 'L'}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
