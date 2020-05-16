import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //wait for something
    const movies = await axios.get(
      //wait for axios
      "https://yts.mx/api/v2/list_movies.json"
    );
  };
  componentDidMount() {
    this.getMovies();
    console.log("loaded");
    this.setState((current) => ({ isLoading: false }));
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "we are ready"}</div>
    );
  }
}

export default App;
