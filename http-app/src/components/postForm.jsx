import axios from 'axios';
import { Component, Fragment } from 'react';
import withRouter from './hoc/withRouter';

class PostForm extends Component {
  state = {
    post: { title: '', body: '' }
  };

  handleChange = ({ currentTarget: input }) => {
    const post = { ...this.state.post };
    post[input.name] = input.value;

    this.setState({ post });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { post } = this.state;
    const { navigate } = this.props;
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      return navigate('/posts');
    } catch (error) {
      await axios.post('http://localhost:4000/api/posts', post);
      return navigate('/posts');
    }
  };
  render() {
    const { post } = this.state;
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
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(PostForm);
