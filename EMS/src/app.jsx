import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Suppliers from './components/Suppliers';
import NavBar from './components/common/navbar';
import Customer from './components/customers';
import { Employees } from './components/employees';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/" element={<Navigate to="/employees" />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
