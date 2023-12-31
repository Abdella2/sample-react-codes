import Joi from 'joi-browser';
import { Fragment, createRef } from 'react';
import Form from './common/form';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  username = createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  };

  doSubmit = () => {
    console.log('saving');
  };

  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username', 'text', true)}
          {this.renderInput('password', 'Password', 'password')}

          {this.renderSubmitButton('Login')}
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
