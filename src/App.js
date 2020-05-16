import React from "react";

//function use in react is render()
//react component have more than render() -> life cycle method
//react create and kill component

//mounting -> constructor()
//updating
//unmounting -> change page, use ohter component etc

//state is about data that changes -> dynamic data
class App extends React.Component {
  state = {
    // state is object -> data that will change
    count: 0,
  }; //do not mutate state directly
  //mutating state should re render() how?
  //using setState() it is possible to refresh render() function
  add = () => {
    console.log(`add`);
    this.setState({ count: this.state.count + 1 }); // 추천되지 않는 방법이다.
  };
  minus = () => {
    console.log("minus");
    this.setState((current) => ({
      count: current.count - 1,
    })); // recommended 함수 이름이 없는 화살표 함수로 한문장이기때문에 {}역시 생략했다.
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("i just updated");
  }

  componentWillUnmount() {
    // when component goes away
    console.log("goodbye world");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>
          The number is : {this.state.count} component
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ); //함수에 괄호가 붙으면 바로 실행 아니면 클릭시에만 실행
  }
}
export default App;
// javascript code go in {}
//map takes function and execute for each item in array
// npm install prop-types
