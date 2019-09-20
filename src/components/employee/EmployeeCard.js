import React, { Component } from 'react';
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
        </div>
      </div>
    );
  }
}

export default EmployeeCard;