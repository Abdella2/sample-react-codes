import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Suppliers from './components/Suppliers';
import NavBar from './components/common/navbar';
import NotFound from './components/common/notFound';
import Customer from './components/customers';
import EmployeeForm from './components/employeeForm';
import { Employees } from './components/employees';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/new" element={<EmployeeForm />} />
          <Route path="/employees/:id" element={<EmployeeForm />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
