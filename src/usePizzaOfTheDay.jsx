import { useEffect, useState } from 'react';

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  async function fetchPizzaOfTheDay() {
    const response = await fetch('/api/pizza-of-the-day');
    const data = await response.json();

    return setPizzaOfTheDay(data);
  }

  return pizzaOfTheDay;
};
