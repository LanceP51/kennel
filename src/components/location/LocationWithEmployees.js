import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {
    state = {
      location: {},
      employees: []
    }

    componentDidMount(){
        //got here now make call to get Location with Employee
        LocationManager.getLocationWithEmployees(this.props.match.params.locationId)
            .then((locationWithEmployee) => {
            this.setState({
              location: locationWithEmployee,
              employees: locationWithEmployee.employees,
            })
        })
    }

    render(){
        return (
          <div className="card">
            <p>Location: {this.state.location.name}</p>
            {this.state.employees.map(employee =>
              <EmployeeCard
                key={employee.id}
                employeeProp={employee}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default LocationWithEmployees;