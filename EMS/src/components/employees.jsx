import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { deleteEmployee, getEmployees } from '../services/employeeService';
import { getGenders } from '../services/genderService';
import paginate from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import SearchBox from './common/searchBox';
import EmployeeTable from './employeeTable';

export class Employees extends Component {
  state = {
    employees: [],
    genders: [],
    selectedGender: {},
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: 'employeeNo', order: 'asc' },
    searchKey: ''
  };

  async componentDidMount() {
    try {
      const { data: genders } = await getGenders();
      const { data: employees } = await getEmployees();

      this.setState({
        employees,
        genders: [{ _id: '', name: 'All Gender' }, ...genders],
        selectedGender: this.state.genders[0]
      });
    } catch (error) {}
  }

  handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      const { data: employees } = await getEmployees();
      this.setState({
        employees
      });
    } catch (error) {
      if (error.response && error.response.status === 404)
        alert('Employee has already been deleted');
    }
  };

  handLikeChange = (employee) => {
    const employees = [...this.state.employees];
    const index = employees.indexOf(employee);

    employees[index] = { ...employees[index] };
    employees[index].isLiked = !employees[index].isLiked;

    this.setState({
      employees
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
      currentPage: 1,
      searchKey: ''
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
      sortColumn,
      searchKey
    } = this.state;

    let filteredEmployees = allEmployees;

    if (selectedGender && selectedGender._id)
      filteredEmployees = allEmployees.filter(
        (employee) => employee.gender.name == selectedGender.name
      );
    else if (searchKey)
      filteredEmployees = allEmployees.filter((employee) =>
        employee.employeeNo.toLowerCase().startsWith(searchKey)
      );

    const sortedEmployees = _.orderBy(
      filteredEmployees,
      [sortColumn.path],
      [sortColumn.order]
    );
    const employees = paginate(sortedEmployees, currentPage, pageSize);
    return { totalCount: filteredEmployees.length, data: employees };
  };

  handleSearch = (searchKey) => {
    // ,
    // sortColumn: { path: 'employeeNo', order: 'asc' },
    // selectedGender: {}
    this.setState({
      searchKey: searchKey.toLowerCase(),
      currentPage: 1,
      selectedGender: {}
    });
  };

  render() {
    const {
      genders,
      pageSize,
      currentPage,
      selectedGender,
      sortColumn,
      searchKey
    } = this.state;

    const { totalCount: count, data: employees } = this.getPagedData();

    return (
      <Fragment>
        <div className="row">
          <div className="col-7 offset-3">{count} employees</div>
          <div className="col">
            <Link to="/employees/new" className="btn btn-primary">
              New Employee
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genders}
              selectedItem={selectedGender}
              onItemSelectionChange={this.handleGenderSelectionChange}
            />
          </div>
          <div className="col">
            <SearchBox value={searchKey} onChange={this.handleSearch} />
            {count === 0 && <p>There is no employee in the database.</p>}
            {count !== 0 && (
              <div>
                <EmployeeTable
                  employees={employees}
                  sortColumn={sortColumn}
                  onLikeChange={this.handLikeChange}
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
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
