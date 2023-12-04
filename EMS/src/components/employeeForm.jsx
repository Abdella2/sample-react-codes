import { Component, Fragment } from 'react';
import withRouter from './hoc/withRouter';

class EmployeeForm extends Component {
  render() {
    const { params } = this.props;
    return (
      <Fragment>
        <h1>Employee Form-{params.id}</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => console.log(params.id)}>
          Save
        </button>
      </Fragment>
    );
  }
}

export default withRouter(EmployeeForm);
