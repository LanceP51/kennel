import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <picture>
            <img src={require('./owner1.jpg')} alt="owner1" />
          </picture>
          <h3>Name: <span className="card-ownername">{this.props.ownerProp.name}</span></h3>
          <p>Phone Number: {this.props.ownerProp.number}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;