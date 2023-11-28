import PropTypes from 'prop-types';
import { Component } from 'react';

class EmployeeTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  };
  render() {
    const { employees, onDelete } = this.props;
    return (
      <table className="table">
        <thead className="thead">
          <tr>
            <th onClick={() => this.raiseSort('employeeNo')}>Employee No.</th>
            <th onClick={() => this.raiseSort('name')}>Name</th>
            <th onClick={() => this.raiseSort('email')}>Email</th>
            <th onClick={() => this.raiseSort('gender.name')}>Gender</th>
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
                  onClick={() => onDelete(e._id)}
                  className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

EmployeeTable.propTypes = {
  sortColumn: PropTypes.object.isRequired
};

export default EmployeeTable;
