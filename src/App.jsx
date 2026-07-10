import React from 'react';
import { createRoot } from 'react-dom/client';
// import Pizza from './Pizza';
import Order from './Order';

const App = () => {
  return (
    <div>
      <h1 className="logo">Pixel Perfect Pizzas</h1>
      {/* <Pizza
        name="The Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
        image="http://localhost:3000/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image="http://localhost:3000/public/pizzas/hawaiian.webp"
      /> */}
      <Order />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(React.createElement(App));
