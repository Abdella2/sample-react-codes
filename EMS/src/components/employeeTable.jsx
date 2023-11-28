function EmployeeTable({ employees, onDelete, onSort }) {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th onClick={() => onSort('employeeNo')}>Employee No.</th>
          <th onClick={() => onSort('name')}>Name</th>
          <th onClick={() => onSort('email')}>Email</th>
          <th onClick={() => onSort('gender.name')}>Gender</th>
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

export default EmployeeTable;
