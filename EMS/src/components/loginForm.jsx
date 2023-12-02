import { Component, Fragment, createRef } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' }
  };

  username = createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSave = (e) => {
    e.preventDefault();
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
    return (
      <Fragment>
        <h1>account</h1>
        <form onSubmit={this.handleSave}>
          <Input
            name="username"
            label="Username"
            value={username}
            onChange={this.handleChange}
            ref={this.username}
            autoFocus
          />
          <Input
            name="password"
            label="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Save</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
