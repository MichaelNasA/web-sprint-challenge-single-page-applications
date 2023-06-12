/** 
 * 
 * THESE ARE THE LINKS 
 * 
 *## Introduction

    In this challenge you will be working from the `Bloomtech Eats` homepage to create a functional button that leads to a build your own pizza custom form.

    You may use the following wireframes as guidance as you design your site but it is not required that you do so.

    [Form](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Form.png)

    [Home Page](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Homepage.png)

    [Confirmation](https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications/blob/main/Assets/Confirmation.png)
 
 * 
 * 
 * [ ] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [ ] A order form that has a "/pizza" route and shows the form
- [ ] A form with an id of "pizza-form"
- [ ] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [ ] A dropdown for pizza size with an id of "size-dropdown"
- [ ] A checklist for toppings - at least 4 (hint: name each separately!)
- [ ] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits the form and returns a database record of name, size, toppings and special instructions */


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"));

//- [ ] The `App` component is wrapped in `BrowserRouter` - complete this requirement in the `index.js` module


