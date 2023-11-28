import 'bootstrap/dist/css/bootstrap.css';
import { Component, Fragment } from 'react';
import '../App.css';
import { deleteEmployee, getEmployees } from '../services/fakeEmployeeService';
import { getGenders } from '../services/fakeGenderService';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';

export class Employees extends Component {
  state = {
    employees: getEmployees(),
    genders: [{ name: 'All Gender' }, ...getGenders()],
    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({
      selectedGender: this.state.genders[0]
    });
  }

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

  handleGenderSelectionChange = (selectedGender) => {
    this.setState({
      selectedGender,
      currentPage: 1
    });
  };

  render() {
    const {
      employees: allEmployees,
      genders,
      pageSize,
      currentPage,
      selectedGender
    } = this.state;

    let employees =
      selectedGender && selectedGender._id
        ? allEmployees.filter(
            (employee) => employee.gender.name == selectedGender.name
          )
        : allEmployees;

    const { length: count } = employees;

    if (count === 0) return <p>There is no employee in the database.</p>;

    employees = paginate(employees, currentPage, pageSize);

    return (
      <Fragment>
        <p>{count} employees</p>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genders}
              selectedItem={selectedGender}
              onItemSelectionChange={this.handleGenderSelectionChange}
            />
          </div>
          <div className="col">
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
                      <button
                        onClick={() => this.handleDelete(e._id)}
                        className="btn btn-danger">
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
          </div>
        </div>
      </Fragment>
    );
  }
}
