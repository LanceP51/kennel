import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                <picture>
                    <img src={require('./loc1.jpg')} alt="location1" />
                </picture><h2>{this.props.locationProp.name}<br />
                </h2>
                <address>
                    Visit Us at the {this.props.locationProp.area} Location
                </address>
                <Link to={`/locations/${this.props.locationProp.id}/edit`}>
            <button>Edit</button>
          </Link>
                <Link to={`/locations/${this.props.locationProp.id}`}>
            <button>Details</button>
          </Link>
            </div></div>
        );
    }
}

export default LocationCard;