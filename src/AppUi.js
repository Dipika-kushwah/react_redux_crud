import React, { Component } from "react";

import { addEmploye } from "./Action/Action";
import { deleteEmploye } from "./Action/Action";
import { editEmploye } from "./Action/Action";
import { getEmploye } from "./Action/Action";

import { connect } from "react-redux";

// import axios from 'react'


 class AppUi extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      lname: "",
      email: "",
    };
  }

  componentDidMount(){
    this.props.getEmploye()
        // debugger
    //  this.props.getEmploye();

  }
  // componentDidMount() {
  //   axios.get(`https://63610b45af66cc87dc21409b.mockapi.io/users`).then((res)=>{
  //     let newData=this.props.getEmploye()
      
  //     this.setState({[newData]:this.newData})
    

  //   })
   
  // }

  submitData = (e) => {
    e.preventDefault()
    if (
      this.state.name &&
      this.state.lname &&
      this.state.email &&
      !this.state.id
    ) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        name: this.state.name,
        lname: this.state.lname,
        email: this.state.email,
      };

      this.props.addEmploye(newEmployee);
      
    } else if (this.state.name && this.state.lname && this.state.email && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        name: this.state.name,
        lname: this.state.lname,
        email: this.state.email,
      };
      

      this.props.editEmploye(updatedDetails);
    }
    else {
  alert("Enter Employee Details.");
}

this.clearData();
}; 
  

  editDetails = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      lname: data.lname,
      email:data.email
    });
  };
  clearData = () => {
    this.setState({
      id: 0,
      name: "",
      lname: "",
      email:''
    });
  };
  deleteEmploye = (index) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmploye(index);
    }
  };

  // handleNameChange = (e) => {
  //  let tarGetname=e.target.name
  //  this.setState({[tarGetname]:e.target.value});
  // };

  handleNameChange = (e) => {
 
    this.setState({ name: e.target.value,});
   };
 
  handleLastNameChange = (e) => {
    this.setState({
      lname: e.target.value,
    });
  };

 handleEmail=(e)=>{
  this.setState({
    email:e.target.value
  })
 }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                // name='name'
                placeholder="enter the name"
                onChange={this.handleNameChange}
                value={this.state.name}
              />
            </label>
            <label>
              Last-Name
              <input
                // name='lname'
                type="text"
                placeholder="enter the last name"
                // onChange={this.handleNameChange }
                onChange={this.handleLastNameChange}
                value={this.state.lname}
              />
            </label>
            <label>
              Email
              <input
                // name='email'
                type="email"
                placeholder="enter the email"
                onChange={this.handleEmail}
                // onChange={this.handleNameChange }
                value={this.state.email}
              />
            </label>
            {this.state.id ? (
              <button onClick={this.submitData}>UPDATE</button>
            ) : (
              <button onClick={this.submitData}>ADD</button>
            )}
            {/* <button onClick={this.submitData}>Clear</button> */}
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last-Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees &&
              this.props.employees.map((data, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>
                      <button onClick={() => this.editDetails(data)}>
                        EDIT
                      </button>
                      <button onClick={() => this.deleteEmploye(data.id)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToprops=(state)=>({
  employees: state.employees
})

  // const mapDispatchToProps = dispatch => ({
  //   getEmploye: () => dispatch(getEmploye())
  // });

export default  connect(mapStateToprops,{addEmploye,deleteEmploye,editEmploye,getEmploye})(AppUi)