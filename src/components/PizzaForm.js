import React, { useState } from 'react'
import axios from 'axios';


export function PizzaForm(props){
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    if(name.length < 2){
        setError("name must be at least 2 characters");
    } else {
        setError("");
    }
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setToppings((prevToppings) => [...prevToppings, value]);
    } else {
      setToppings((prevToppings) => prevToppings.filter((topping) => topping !== value));
    }
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can perform your database record creation logic using the form data
    const orderData = {
        name: name,
        size: size,
        toppings: toppings,
        special: specialInstructions,
    };

    console.log('Order Data:', orderData);

    axios.post(`https://reqres.in/api/orders`, orderData).then( (res) => {
        console.log();
    })
  };
  return (
    <form onSubmit={handleSubmit} id="pizza-form">
        <label>
            name
            <input id="name-input" value={name} onChange={handleNameChange}/>
            {error && <p>{error}</p>}
        </label>
      <label>
        Pizza Size:
        <select id="size-dropdown" value={size} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>

      <label>
        Toppings:
        <ul>
          <li>
            <label>
              <input type="checkbox" name="toppings" value="pepperoni" onChange={handleToppingsChange} />
              Pepperoni
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="toppings" value="mushrooms" onChange={handleToppingsChange} />
              Mushrooms
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="toppings" value="onions" onChange={handleToppingsChange} />
              Onions
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="toppings" value="olives" onChange={handleToppingsChange} />
              Olives
            </label>
          </li>
        </ul>
      </label>

      <label>
        Special Instructions:
        <textarea id="special-text" value={specialInstructions} onChange={handleSpecialInstructionsChange} />
      </label>

      <button type="submit" id="order-button">Add to Order</button>
    </form>
  );
}




