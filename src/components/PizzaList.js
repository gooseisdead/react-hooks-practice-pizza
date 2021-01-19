import React from 'react';
import Pizza from './Pizza'

function PizzaList({ pizzas, clickHandler }) {

  const renderPizzas = pizzas.map((pizzaObj) => (
  <Pizza key={pizzaObj.id} pizza={pizzaObj} clickHandler={clickHandler}/>
  ))

    return ( 
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {renderPizzas}
        </tbody>
      </table>
    );
}

export default PizzaList;

