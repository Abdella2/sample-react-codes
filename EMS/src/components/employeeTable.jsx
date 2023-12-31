import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';

class EmployeeTable extends Component {
  columns = [
    {
      path: 'employeeNo',
      label: 'Employee No.',
      content: (item) => (
        <Link to={`/employees/${item._id}`}>{item.employeeNo}</Link>
      )
    },
    { path: 'name', label: 'Name' },
    { path: 'email', label: 'Email' },
    { path: 'gender.name', label: 'Gender' },
    {
      key: 'like',
      content: (item) => (
        <Like
          isLiked={item.isLiked}
          onLikeChange={() => this.props.onLikeChange(item)}
        />
      )
    },
    {
      key: 'delete',
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item._id)}
          className="btn btn-danger">
          Delete
        </button>
      )
    }
  ];
  render() {
    const { employees, sortColumn, onDelete, onSort } = this.props;
    return (
      <Table
        data={employees}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        onDelete={onDelete}
      />
    );
  }
}

EmployeeTable.propTypes = {
  sortColumn: PropTypes.object.isRequired
};

export default EmployeeTable;
