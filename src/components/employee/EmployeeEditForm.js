import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import LocationManager from "../../modules/LocationManager"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      employeeName: "",
      position: "",
      loadingStatus: true,
      locationId: "",
      locations: []
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName,
        position: this.state.position,
        locationId: +this.state.locationId
      };

      EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
            position: employee.position,
            loadingStatus: false,
          });
      });
      LocationManager.getAll().then(locations => {
        this.setState({
          locations: locations
        });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="position"
                value={this.state.position}
              />
              <label htmlFor="position">Position</label>
              <select
              className="form-control"
              id="locationId"
              value={this.state.locationId}
              onChange={this.handleFieldChange}
            >
              {this.state.locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm