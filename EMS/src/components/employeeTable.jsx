import PropTypes from 'prop-types';
import { Component } from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

class EmployeeTable extends Component {
  columns = [
    { path: 'employeeNo', label: 'Employee No.' },
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'gender.name', label: 'Gender' },
    {
      key: 'delete',
      content: () => (
        <button
          onClick={(item) => this.props.onDelete(item._id)}
          className="btn btn-danger">
          Delete
        </button>
      )
    }
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
        <TableBody
          data={employees}
          columns={this.columns}
          onDelete={onDelete}
        />
      </table>
    );
  }
}

EmployeeTable.propTypes = {
  sortColumn: PropTypes.object.isRequired
};

export default EmployeeTable;
