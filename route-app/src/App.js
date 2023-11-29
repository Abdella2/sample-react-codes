import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import NavBar from './components/navbar';
import Posts from './components/posts';
import Products from './components/products';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/products" Component={Products} />
          <Route path="/posts" Component={Posts} />
          <Route path="/admin" Component={Dashboard} />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
