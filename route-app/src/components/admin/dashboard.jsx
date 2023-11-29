import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './posts';
import Sidebar from './sidebar';
import Users from './users';

function Dashboard() {
  return (
    <Fragment>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Routes>
        <Route path="/admin/posts" element={<Posts />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </Fragment>
  );
}

export default Dashboard;
