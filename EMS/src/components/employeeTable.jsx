import PropTypes from 'prop-types';
import { Component } from 'react';
import TableHeader from './common/tableHeader';

class EmployeeTable extends Component {
  columns = [
    { path: 'employeeNo', label: 'Employee No.' },
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'gender.name', label: 'Gender' },
    { key: 'delete' }
  ];
  render() {
    const { employees, sortColumn, onDelete, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
