import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import { Component, Fragment } from 'react';
import '../App.css';
import { deleteEmployee, getEmployees } from '../services/fakeEmployeeService';
import { getGenders } from '../services/fakeGenderService';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import EmployeeTable from './employeeTable';

export class Employees extends Component {
  state = {
    employees: getEmployees(),
    genders: [{ _id: '', name: 'All Gender' }, ...getGenders()],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: 'employeeNo', order: 'asc' }
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

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn
    });
  };

  getPagedData = () => {
    const {
      employees: allEmployees,
      pageSize,
      currentPage,
      selectedGender,
      sortColumn
    } = this.state;

    const filteredEmployees =
      selectedGender && selectedGender._id
        ? allEmployees.filter(
            (employee) => employee.gender.name == selectedGender.name
          )
        : allEmployees;

    const sortedEmployees = _.orderBy(
      filteredEmployees,
      [sortColumn.path],
      [sortColumn.order]
    );
    const employees = paginate(sortedEmployees, currentPage, pageSize);
    return { totalCount: filteredEmployees.length, data: employees };
  };

  render() {
    const { genders, pageSize, currentPage, selectedGender, sortColumn } =
      this.state;

    const { totalCount: count, data: employees } = this.getPagedData();

    if (count === 0) return <p>There is no employee in the database.</p>;

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
            <EmployeeTable
              employees={employees}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
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
