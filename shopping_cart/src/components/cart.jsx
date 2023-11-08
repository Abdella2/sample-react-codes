import { Component, Fragment } from 'react';
import '../App.css';

class Cart extends Component {
  state = {
    totalItems: 1
  };

  totalStyle = {
    backgroundColor: '#f59700bf',
    padding: '4px',
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777'
  };

  render() {
    return (
      <Fragment>
        <h1 style={{ color: 'gray' }}>Well Come to shopping cart</h1>
        {this.showTotalItems()}
        <br />
        <br />
        <button className="app-btn app-btn-secondary">Add</button>
      </Fragment>
    );
  }

  showTotalItems() {
    const { totalItems } = this.state;

    let badgeClasses = 'app-badge app-badge-';
    badgeClasses += totalItems === 0 ? 'warning' : 'primary';
    return (
      <span className={badgeClasses}>
        {totalItems === 0 ? 'Empty' : totalItems}
      </span>
    );
  }
}

export default Cart;
