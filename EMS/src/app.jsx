import { Fragment } from 'react';
import NavBar from './components/common/navbar';
import { Employees } from './components/employees';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Employees />
    </Fragment>
  );
};

export default App;
