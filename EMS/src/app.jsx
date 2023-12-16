import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/common/navbar';
import Postman from './postman';
import AppRoutes from './routes';

const App = () => {
  return <Postman />;
  return (
    <Fragment>
      <ToastContainer />
      <NavBar />
      <div className="container mt-3">
        <AppRoutes />
      </div>
    </Fragment>
  );
};

export default App;
