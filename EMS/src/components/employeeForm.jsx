import Joi from 'joi-browser';
import { Fragment } from 'react';
import { getEmployee, saveEmployee } from '../services/fakeEmployeeService';
import { getGenders } from '../services/fakeGenderService';
import Form from './common/form';
import withRouter from './hoc/withRouter';

class EmployeeForm extends Form {
  state = {
    data: { employeeNo: '', name: '', genderId: '', email: '' },
    genders: [],
    errors: {}
  };
  schema = {
    id: Joi.string(),
    employeeNo: Joi.string().min(2).required().label('Employee No.'),
    name: Joi.string().required().label('Name'),
    genderId: Joi.string().required().label('Gender'),
    email: Joi.string().email().required().label('Email')
  };

  componentDidMount() {
    const genders = getGenders();
    this.setState({ genders });

    const { params, navigate } = this.props;

    const employee = getEmployee(params.id);
    if (!employee) return navigate('/not-found', { replace: true });

    this.setState({ data: this.populateEmployee(employee) });
  }

  populateEmployee(employee) {
    return {
      id: employee._id,
      employeeNo: employee.employeeNo,
      name: employee.name,
      genderId: employee.gender._id,
      email: employee.email
    };
  }

  doSubmit = () => {
    saveEmployee(this.state.data);
    this.props.navigate('/employees');
  };
  render() {
    return (
      <Fragment>
        <h1>Employee Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('employeeNo', 'Employee No.')}
          {this.renderInput('name', 'Name')}
          {this.renderSelect('genderId', 'Select a gender', this.state.genders)}
          {this.renderInput('email', 'Email')}
          {this.renderSubmitButton('Save')}
        </form>
      </Fragment>
    );
  }
}

export default withRouter(EmployeeForm);
