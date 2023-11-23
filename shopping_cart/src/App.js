import { Component, Fragment } from 'react';
import './App.css';
import Cart from './components/cart';
import NavBar from './components/nav';

class App extends Component {
  state = {
    totalProducts: 0
  };

  handleUpdateTotalProducts = (totalProducts) => {
    console.log('total Products', totalProducts);
    this.setState({
      totalProducts
    });
  };

  render() {
    return (
      <Fragment>
        <NavBar totalProducts={this.state.totalProducts} />
        <main>
          <Cart onUpdateTotalProducts={this.handleUpdateTotalProducts} />
        </main>
      </Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
