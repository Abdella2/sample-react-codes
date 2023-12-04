import Joi from 'joi-browser';
import { Fragment } from 'react';
import Form from './common/form';

class Register extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required()
  };

  render() {
    return (
      <Fragment>
        <h1>Register</h1>
        {this.renderInput('username', 'Username')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderInput('name', 'Name')}

        {this.renderSubmitButton('Register')}
      </Fragment>
    );
  }
}

export default Register;
