import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";
import sketch from "./p5.js";





class App extends React.Component {
  state = {
    name: "John"
  };

handleClick(e){
  console.log(e.target);
}

  render() {
    return (
      <div>
        <h1>Hello There {this.state.name}</h1>
        <P5Wrapper sketch={sketch} />
        <button onClick = {this.handleClick}>Click me now</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
