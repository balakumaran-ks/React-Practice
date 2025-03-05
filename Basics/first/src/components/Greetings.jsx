import React from "react";

function Greeting() {
  return (
    <>
      {/* <h2>Greetings from Balakumaran , this is a react component...</h2> */}
      <h2>{greet()} from Balakumaran , this is a react component...</h2>
    </>
  );
}

function greet() {
  let now = new Date().getHours();
  if (now < 12) {
    return "Good Morning";
  } else if (now < 4) {
    return "Good Afternoon";
  } else {
    return "Goog Evening";
  }
}

export default Greeting;
