import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "houssem mbarki",
      bio: "studying in go my code",
      profession: "Full stack Web developper",

      show: true,
      count: 0,
    };
  }
  handleShowPerson = () => this.setState({ show: !this.state.show, count: 0 });
  counteur = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.CD = setInterval(() => this.counteur(), 1000);
  }
  render() {
    if (this.state.show)
      return (
        <div className="App">
          <p>
            Hello my name is {this.state.fullName} I'm in high spirits
            {this.state.bio} I'm a {this.state.profession} .
          </p>
          <img src="/derulo.jpg" alt="it me " /> <br />
          <button onClick={this.handleShowPerson}>click me</button>
          <p>Timer : {this.state.count} second(s)</p>
        </div>
      );
    else
      return (
        <div className="App">
          <h1>Hello world</h1>
          <button onClick={this.handleShowPerson}>Hello</button>
        </div>
      );
  }
}

export default App;