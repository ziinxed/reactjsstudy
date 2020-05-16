import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "kimchi",
    image: "",
    rating: 4.9,
  },
  {
    id: 2,
    name: "samgyeop",
    image: "",
    rating: 5.0,
  },
];

function Food({ name, image, rating }) {
  // props 바로 접근 instead of props.fav
  return (
    <div>
      <h1> I like {name} </h1>
      <h4> {rating}/5.0</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  // name should be proptypes
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {foodIlike.map((dish) => (
        <Food
          key={dish.id} // react element unique -> react internal use
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
} // give prop fav to food in jsx

export default App;
// javascript code go in {}
//map takes function and execute for each item in array
// npm install prop-types
