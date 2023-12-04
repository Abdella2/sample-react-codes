import Joi from 'joi-browser';
import { Fragment, createRef } from 'react';
import Form from './common/form';
import Input from './common/input';

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
    const { username, password } = this.state.data;
    const { errors } = this.state;
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSave}>
          <Input
            name="username"
            label="Username"
            value={username}
            error={errors.username}
            onChange={this.handleChange}
            // ref={this.username}
            autoFocus
          />
          <Input
            name="password"
            label="password"
            type="password"
            value={password}
            error={errors.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" disabled={this.validate()}>
            Save
          </button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
