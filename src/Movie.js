import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poste }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  titile: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
