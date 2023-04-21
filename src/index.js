//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const deterMine = new Date().getHours();

if (deterMine <= 11) {
  var greeting = "Good Morning";
} else if (deterMine <= 18) {
  var greeting = "Good Afternoon";
} else if (deterMine <= 23) {
  var greeting = "Good Evening";
}

ReactDOM.render(<h1>{greeting}</h1>, document.getElementById("root"));
