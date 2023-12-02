import { Component, Fragment, createRef } from 'react';

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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              value={username}
              onChange={this.handleChange}
              ref={this.username}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
