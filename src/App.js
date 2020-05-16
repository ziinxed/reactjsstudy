import React from "react";

function Food({ fav }) {
  // props 바로 접근
  return <h1>I like {fav} </h1>;
}
function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      <Food fav="kimchi" />
    </div>
  );
} // give prop fav to food in jsx

export default App;
