import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './employee.css'

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./vet1.webp')} alt="Vet1" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employeeProp.name}</span></h3>
          <p>Position: {this.props.employeeProp.position}</p>
          <Link to={`/employees/${this.props.employeeProp.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => this.props.deleteEmployeeProp(this.props.employeeProp.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;