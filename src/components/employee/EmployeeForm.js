import React, { Component } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";
import LocationManager from "../../modules/LocationManager"

class EmployeeForm extends Component {
  state = {
    employeeName: "",
    position: "",
    loadingStatus: false,
    locationId: "",
    locations: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Employee      object, invoke the EmployeeManager post method, and redirect to the full Employee list
   */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.employeeName === "" || this.state.position === "") {
      window.alert("Please input an Employee name and position");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.employeeName,
        position: this.state.position,
        locationId: +this.state.locationId
      };

      // Create the Employee and redirect user to Employee list
      EmployeeManager.post(employee).then(() =>
        this.props.history.push("/employees")
      );
    }
  };

  componentDidMount() {
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
                onChange={this.handleFieldChange}
                id="employeeName"
                placeholder="Employee Name"
              />
              <label htmlFor="employeeName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="position"
                placeholder="Position"
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
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEmployee}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeForm;
