import React, { useState, useEffect } from 'react';
import Header from './Header'
import PizzaForm from './PizzaForm'
import PizzaList from './PizzaList'

function App() {

    const [pizzas, setPizzas] = useState([])
    const [pizzaObj, setPizzaObj] = useState({ 
      id: '',
      topping: '',
      size: '',
      vegetarian: ''
    })
      
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((r) => r.json())
    .then(console.log(setPizzas))
  }, [])

  function clickHandler(pizza) {
    setPizzaObj(
      {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian,
      }
    )
  }

  function changeHandler(event) {
    setPizzaObj({...pizzaObj, [event.target.name]: event.target.value
    })
  }

  function radioChangeHandler(event) {
    if (event.target.value === "Vegetarian") {
      setPizzaObj({
        pizzaObj: {...pizzaObj, vegetarian: true}
      })
    } else if (event.target.value === "Not Vegetarian") {
      setPizzaObj({
        pizzaObj: {...pizzaObj, vegetarian: false}
      })
    }
  }

  function editPizza(updatedPizza) {
    const updatedPizzaArray = pizzas.map((pizza) =>
    pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setPizzaObj(
      {
        id: updatedPizza.id,
        topping: updatedPizza.topping,
        size: updatedPizza.size,
        vegetarian: updatedPizza.vegetarian,
      })
    setPizzas(updatedPizzaArray)
    console.log(updatedPizzaArray)
  }

  function submitHandler(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topping: pizzaObj.topping,
        size: pizzaObj.size,
        vegetarian: pizzaObj.vegetarian,
      })
    })
    .then((resp) => resp.json())
    .then(editPizza)
  }
  
  return (
      <div>
        <Header/>
        <PizzaForm pizzaObj={pizzaObj} changeHandler={changeHandler} radioChange={radioChangeHandler} submitHandler={submitHandler}/>
        <PizzaList pizzas={pizzas} clickHandler={clickHandler}/>
      </div>
    );
}
export default App;
