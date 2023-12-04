import Joi from 'joi-browser';
import { Fragment } from 'react';
import Form from './common/form';

class Register extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().min(5).required().label('Password'),
    name: Joi.string().required().label('Name')
  };

  doSubmit = () => {
    console.log('Registering');
  };
  render() {
    return (
      <Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSave}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderSubmitButton('Register')}
        </form>
      </Fragment>
    );
  }
}

export default Register;
