import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PostTable from './components/postTable';
class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Routes>
          <Route path="/posts" element={<PostTable />} />
          <Route path="/" element={<Navigate to={'/posts'} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
