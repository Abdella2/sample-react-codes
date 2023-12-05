import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.setState({ posts });
  }

  handleAdd = () => console.log('Adding');

  handleUpdate = () => console.log('Updating');

  handleDelete = () => console.log('Deleting');

  render() {
    return (
      <div className="container mt-3">
        <button className="btn btn-primary btn-sm" onClick={this.handleAdd}>
          New
        </button>
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
      </div>
    );
  }
}

export default App;
