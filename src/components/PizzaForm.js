import React from 'react'

function PizzaForm({ pizzaObj, changeHandler, radioHandler, submitHandler }) {

    return( 
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping"
              name="topping" 
              value={pizzaObj.topping}
              onChange={changeHandler}/>
          </div>
          <div className="col">
            <select value={pizzaObj.size} className="form-control" name="size" onChange={changeHandler}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" defaultChecked={pizzaObj.vegetarian} onChange={radioHandler}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" defaultChecked={!pizzaObj.vegetarian} onChange={radioHandler}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={submitHandler}>Submit</button>
          </div>
        </div>
        )
}
    
    export default PizzaForm
