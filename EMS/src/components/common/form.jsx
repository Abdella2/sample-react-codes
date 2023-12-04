import Joi from 'joi-browser';
import { Component } from 'react';
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    error.details.map((err) => (errors[err.path[0]] = err.message));

    return errors;
    // const { username, password } = this.state.account;
    // const errors = {};

    // if (username.trim() === '') errors.username = 'Username is required';
    // if (password.trim() === '') errors.password = 'Password is required';

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateInput = ({ name, value }) => {
    // return !value.trim() ? `${name} is required` : null;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    if (!error) return null;

    return error.details[0].message;
  };

  handleSave = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errorMessage = this.validateInput(input);
    const errors = { ...this.state.errors };
    errorMessage
      ? (errors[input.name] = errorMessage)
      : delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({
      data,
      errors
    });
  };

  renderInput(name, label, type = 'text', autoFocus = false) {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
        // ref={this.username}
        autoFocus={autoFocus}
      />
    );
  }

  renderSubmitButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }
}

export default Form;
