import axios from 'axios';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withRouter from './hoc/withRouter';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log('Logging the error', error);
    alert('An unexpected error occurred.');
  }

  return Promise.reject(error);
});

class PostTable extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const { data: posts } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({ posts });
    } catch (error) {
      console.log("couldn't connect to json placeholder");
      const { data: posts } = await axios.get(
        'http://localhost:4000/api/posts'
      );
      this.setState({ posts });
    }
  }

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = originalPosts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(`http://localhost:4000/api/posts/${post.id}`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        alert('The post has already been deleted.');

      this.setState({ posts: originalPosts });
    }
  };
  render() {
    return (
      <Fragment>
        <Link className="btn btn-primary btn-sm" to="/posts/new">
          New
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <Link className="btn btn-info" to={`/posts/${post.id}`}>
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(post)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default withRouter(PostTable);
