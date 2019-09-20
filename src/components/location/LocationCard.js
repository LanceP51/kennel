import React, { Component } from 'react'
class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                <picture>
                    <img src={require('./loc1.jpg')} alt="location1" />
                </picture><h2>{this.props.locationProp.name}<br />
                <small>{this.props.locationProp.slogan}</small>
                </h2>
                <address>
                    Visit Us at the {this.props.locationProp.area} Location
                    		<br />{this.props.locationProp.address}
                </address>
        </div>
            </div>
        );
    }
}

export default LocationCard;