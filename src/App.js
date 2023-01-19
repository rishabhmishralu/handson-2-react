import React, { Component } from "react";
import "./App.css"
export default class App extends Component {
  state = {
    Name: "",
    Department: "",
    Rating: "",
    employees: [],
  };

  chageHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHander = (e) => {
    e.preventDefault()
    const empObj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating
    };
    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({ employees:arr });
  };

  render() {
    return (
      <div>
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
        <br/>
        <form className="form">
          <label className="label">Name : </label>
          <input className="input"
            type="text"
            name="Name"
            value={this.state.Name}
            onChange={this.chageHandler}
          ></input>

          <br></br>
          <br></br>
          <label className="label" >Department : </label>
         
          
          <input className="input"
            type="text"
            name="Department"
            value={this.state.Department}
            onChange={this.chageHandler}
          ></input>
          <br></br>
          <br></br>
          <label className="label">Rating : </label>
          <input className="input"
            type="number"
            name="Rating"
            value={this.state.Rating}
            onChange={this.chageHandler}
          ></input>
          <br></br>
          <br></br>
          <br/>
          <button className="button" onClick={this.submitHander}>submit</button>
        </form>
    <br/><br/>
        <div className="storedata">
          {this.state.employees.map((value, index) => {
            return <div>Name:{value.Name} Department:{value.Department} Rating:{value.Rating}       ||    </div>;
          })}
        </div>
      </div>
    );
  }
}
