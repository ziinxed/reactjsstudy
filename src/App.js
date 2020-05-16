import React from "react";

function Food({ name, image }) {
  // props 바로 접근 instead of props.fav
  return (
    <div>
      <h1> I like {name} </h1>
      <img src={image} />
    </div>
  );
}

const foodIlike = [
  {
    name: "kimchi",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "samgyeop",
    image:
      "data:image/jpeg;base64,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",
  },
];
function App() {
  return (
    <div className="App">
      <h1> hello </h1>
      {foodIlike.map((dish) => (
        <Food name={dish.name} image={dish.image}></Food>
      ))}
    </div>
  );
} // give prop fav to food in jsx

export default App;
// javascript code go in {}
//map takes function and execute for each item in array
