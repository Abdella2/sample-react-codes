import { Component, Fragment } from 'react';
import '../App.css';
import { getEmployees } from '../services/fakeEmployeeService';

export class Employees extends Component {
  state = {
    employees: getEmployees()
  };

  render() {
    const { employees } = this.state;
    return (
      <Fragment>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Employee No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
            <tbody>
              {employees.map((e) => (
                <tr>
                  <td>{e.employeeNo}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.gender.name}</td>
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      </Fragment>
    );
  }
}
