import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        };

        deleteEmployee = (id)=>{
            EmployeeManager.delete(id)
            .then(EmployeeManager.getAll)
            .then(parsedEmployees => (
                this.setState({
                    employees:parsedEmployees
                })
            ))
        }

    componentDidMount(){
        // console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }

    render(){
        return(

            <>
<section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/employees/new");
            }}
          >
            New Employee
          </button>
        </section>
            <div className="container-cards">
                {this.state.employees.map(singleEmployee => <EmployeeCard deleteEmployeeProp={this.deleteEmployee} key={singleEmployee.id} employeeProp={singleEmployee} />)}
            </div>
            </>
        )
    }
}

export default EmployeeList