import 'bootstrap/dist/css/bootstrap.css';
import { Component, Fragment } from 'react';
import '../App.css';
import { deleteEmployee, getEmployees } from '../services/fakeEmployeeService';
import paginate from '../utils/paginate';
import Pagination from './common/pagination';

export class Employees extends Component {
  state = {
    employees: getEmployees(),
    pageSize: 3,
    currentPage: 1
  };

  handleDelete = (id) => {
    deleteEmployee(id);
    this.setState({
      employees: getEmployees()
    });
  };

  handlePageChange = (selectedPage) => {
    this.setState({
      currentPage: selectedPage
    });
  };

  render() {
    const { employees: allEmployees, pageSize, currentPage } = this.state;
    const { length: count } = this.state.employees;
    if (count === 0) return <p>There is no employee in the database.</p>;

    const employees = paginate(allEmployees, currentPage, pageSize);

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
        <Pagination
          totalItems={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}
