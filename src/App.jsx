import React from 'react';
import { createRoot } from 'react-dom/client';

const Pizza = (props) => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, props.name),
  //   React.createElement('p', {}, props.description),
  // ]);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Pixel Perfect Pizzas 1'),
  //   React.createElement(Pizza, {
  //     name: 'The Pepperoni Pizza',
  //     description: 'Mozzarella Cheese, Pepperoni',
  //   }),
  //   React.createElement(Pizza, {
  //     name: 'The Hawaiian Pizza',
  //     description: 'Sliced Ham, Pineapple, Mozzarella Cheese',
  //   }),
  // ]);

  return (
    <div>
      <h1>Pixel Perfect Pizzas 2</h1>
      <Pizza name="The Pepperoni Pizza" description="Mozzarella Cheese, Pepperoni" />
      <Pizza name="The Hawaiian Pizza" description="Sliced Ham, Pineapple, Mozzarella Cheese" />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(React.createElement(App));
