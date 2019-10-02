import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import EmployeeManager from '../../modules/EmployeeManager';

class LocationDetail extends Component {

    state = {
        name: "",
        slogan: "",
        area: "",
        address: "",
        loadingStatus: true,
        employees: [],
        employeeId: ""
    }

    handleDelete = () => {
        //invoke the delete function in LocationManger and re-direct to the Location list.
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    componentDidMount(){
        //get(id) from LocationManager and hang on to that data; put it into state
        LocationManager.getLocationWithEmployees(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                slogan: location.slogan,
                area: location.area,
                address: location.address,
                employees:location.employees,
                loadingStatus: false
            });
        })
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
          <picture>
                    <img src={require('./loc1.jpg')} alt="location1" />
                </picture><h2>{this.state.name}<br />
                <small>{this.state.slogan}</small>
                </h2>
                <address>
                    Visit Us at the {this.state.area} Location
                    		<br />{this.state.address}
                </address>
                <div>Employees: {this.state.employees.map(employee =>
                  <p>{employee.name}</p>)}</div>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;