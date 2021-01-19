import React from 'react'

function Pizza({ pizza, clickHandler }) {

  function localClickHandler() {
    clickHandler(pizza)
  }

    return(
      <tr>
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td>{pizza.vegetarian ? "Yes" : "No"}</td>
        <td><button type="button" className="btn btn-primary" onClick={localClickHandler}>Edit Pizza</button></td>
      </tr>
    )
}

export default Pizza
