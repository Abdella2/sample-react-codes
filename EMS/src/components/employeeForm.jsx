import Joi from 'joi-browser';
import { Fragment } from 'react';
import { getEmployee, saveEmployee } from '../services/employeeService';
import { getGenders } from '../services/genderService';
import Form from './common/form';
import withRouter from './hoc/withRouter';

class EmployeeForm extends Form {
  state = {
    data: { employeeNo: '', name: '', genderId: '', email: '' },
    genders: [],
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    employeeNo: Joi.string().min(2).required().label('Employee No.'),
    name: Joi.string().required().label('Name'),
    genderId: Joi.string().required().label('Gender'),
    email: Joi.string().email().required().label('Email')
  };

  async componentDidMount() {
    await this.populateGender();
    await this.populateEmployee();
  }

  async populateGender() {
    const { data: genders } = await getGenders();
    this.setState({ genders });
  }

  async populateEmployee() {
    const { params, navigate } = this.props;
    try {
      if (!params.id) return;
      const { data: employee } = await getEmployee(params.id);
      this.setState({ data: this.mapToViewModel(employee) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        return navigate('/not-found', { replace: true });
    }
  }

  mapToViewModel(employee) {
    return {
      _id: employee._id,
      employeeNo: employee.employeeNo,
      name: employee.name,
      genderId: employee.gender._id,
      email: employee.email
    };
  }

  doSubmit = async () => {
    try {
      const dataToSave = { ...this.state.data };
      dataToSave.phone = '092-134-9883';
      dataToSave.company = '6540c914045205f6ad0f0e7c';
      dataToSave.salary = 1100;
      dataToSave.paymentMethod = 'Cash';
      dataToSave.address = { houseNo: '13434' };
      dataToSave.departments = ['CS'];
      dataToSave.cars = [];
      await saveEmployee(dataToSave);
      this.props.navigate('/employees');
    } catch (error) {
      if (error.response && error.response.status === 400)
        alert(error.response.data);
    }
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
