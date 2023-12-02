import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeForm = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <h1>Employee Form-{id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => console.log(id)}>
        Save
      </button>
    </Fragment>
  );
};

export default EmployeeForm;
