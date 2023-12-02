import { Component, Fragment, createRef } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  };

  username = createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  validate = () => {
    const { username, password } = this.state.account;
    const errors = {};

    if (username === '') errors.username = 'Username is required';
    if (password === '') errors.password = 'Password is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSave = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log('saving');
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({
      account
    });
  };

  render() {
    const { username, password } = this.state.account;
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
          <button className="btn btn-primary">Save</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
