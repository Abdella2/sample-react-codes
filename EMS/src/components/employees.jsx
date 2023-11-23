import { Component, Fragment } from 'react';
import '../App.css';
import { deleteEmployee, getEmployees } from '../services/fakeEmployeeService';

export class Employees extends Component {
  state = {
    employees: getEmployees()
  };

  handleDelete = (id) => {
    deleteEmployee(id);
    this.setState({
      employees: getEmployees()
    });
  };

  render() {
    const { employees } = this.state;
    const { length: count } = this.state.employees;
    if (count === 0) return <p>There is no employee in the database.</p>;

    return (
      <Fragment>
        <p>{count} employees</p>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Employee No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e._id}>
                <td>{e.employeeNo}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.gender.name}</td>
                <td>
                  <button onClick={() => this.handleDelete(e._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
