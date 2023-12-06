import axios from 'axios';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withRouter from './hoc/withRouter';

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

  handleUpdate = () => console.log('Updating');

  handleDelete = () => console.log('Deleting');
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
                  <button className="btn btn-info" onClick={this.handleUpdate}>
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={this.handleDelete}>
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
