import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PostForm from './components/postForm';
import PostTable from './components/postTable';
class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Routes>
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostForm />} />
          <Route path="/posts" element={<PostTable />} />
          <Route path="/" element={<Navigate to={'/posts'} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
