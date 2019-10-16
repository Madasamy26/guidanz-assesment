
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.add = this.add.bind(this);
    this.state = {
      name: "",
      greet: "",
      num1: "",
      num2: "",
      result: ""
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`http://localhost:3000/api/greeter/welcome?name=${this.state.name}`);
    this.setState({ name: '', greet: resp.data });
  }

  add = async (event) => {
    event.preventDefault();
    const resp = await axios.post(`http://localhost:3000/api/math/add?a=${this.state.num1}&b=${this.state.num2}`);
    this.setState({ num1: "", num2: "", result: `Result is ${resp.data}` });
  }

  render() {
    return (
      <div className="App">
        <p>React app</p>
        <p>First Service</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Enter Name" value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })} />
          <button>Go!</button>
        </form>
        <p>{this.state.greet}</p>
        <div>
          <p>Second Service</p>
          <form onSubmit={this.add}>
            <input type="text" name="name" placeholder="Enter Value" value={this.state.num1}
              onChange={event => this.setState({ num1: event.target.value })} /><br></br>
            <input type="text" name="name" placeholder="Enter Value" value={this.state.num2}
              onChange={event => this.setState({ num2: event.target.value })} />
            <button>Add</button>
            <p>{this.state.result}</p>
          </form>
        </div>
      </div>
    );

  }

}

export default App;
