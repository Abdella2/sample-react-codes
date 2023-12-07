import Joi from 'joi-browser';
import { Component, Fragment } from 'react';
import http from '../services/httpService';
import withRouter from './hoc/withRouter';

class PostForm extends Component {
  state = {
    post: { title: '', body: '' },
    errors: {}
  };

  schema = {
    title: Joi.string().required().label('Title'),
    body: Joi.string().required().label('Body')
  };

  validateInput = (input) => {
    const partialPost = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };

    const { error } = Joi.validate(partialPost, schema);
    return error ? error.details[0].message : null;
  };
  async componentDidMount() {
    const { params } = this.props;

    if (!params.id) return;
    try {
      const { data: post } = await http.get(
        `http://localhost:4000/api/posts/${params.id}`
      );
      this.setState({ post: this.populatePost(post) });
    } catch (error) {}
  }

  populatePost = (post) => {
    return {
      title: post.title,
      body: post.body
    };
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const error = this.validateInput(input);
    error ? (errors[input.name] = error) : delete errors[input.name];

    const post = { ...this.state.post };
    post[input.name] = input.value;

    this.setState({ post, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.post, this.schema, options);

    const errors = {};
    if (error)
      error.details.map((error) => (errors[error.path] = error.message));

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { post } = this.state;
    const { navigate, params } = this.props;

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    try {
      if (!params.id) await http.post('http://localhost:4000/api/posts', post);
      else await http.put(`http://localhost:4000/api/posts/${params.id}`, post);
      return navigate('/posts');
    } catch (error) {
      if (error.response && error.response.status === 400)
        alert('The form data is not valid');
    }
  };
  render() {
    const { post, errors } = this.state;
    return (
      <Fragment>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              value={post.title}
              onChange={this.handleChange}
            />
            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <input
              id="body"
              name="body"
              type="text"
              className="form-control"
              value={post.body}
              onChange={this.handleChange}
            />
            {errors.body && (
              <div className="alert alert-danger">{errors.body}</div>
            )}
          </div>
          <button className="btn btn-primary" disabled={this.validate()}>
            Save
          </button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(PostForm);
