import React from "react";
import {PizzaForm} from "./components/PizzaForm"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <div>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/pizza" id="order-pizza">
          Pizza
        </Link>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<div>Home</div>}/>
      <Route path='/pizza' element={<PizzaForm/>}/>
    </Routes>

    <h1>BloomTech Eats</h1>

    </>
  );
};
export default App;
