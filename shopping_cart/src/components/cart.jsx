import { Component, Fragment } from 'react';
import '../App.css';
import Items from './items';

class Cart extends Component {
  state = {
    totalItems: 0
  };

  totalStyle = {
    backgroundColor: '#f59700bf',
    padding: '4px',
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777'
  };

  constructor() {
    super();
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem() {
    console.log('this', this);
  }

  handleAddItemToCart = (id) => {
    let state = { ...this.state };
    state.totalItems++;

    const item = state.items.find((item) => item.id === id);
    item.count--;

    this.setState({
      ...state
    });
  };

  render() {
    return (
      <Fragment>
        <h1 style={{ color: 'gray' }}>Well Come to shopping cart</h1>
        {this.showTotalItems()}
        <br />
        <br />
        <Items />

        <button
          className="app-btn app-btn-secondary"
          onClick={this.handleAddItem}>
          Add
        </button>
      </Fragment>
    );
  }

  showTotalItems() {
    const { totalItems } = this.state;

    return (
      <span className={this.getBadgeClasses(totalItems)}>
        {totalItems === 0 ? 'Empty' : totalItems}
      </span>
    );
  }

  getBadgeClasses(totalItems) {
    let badgeClasses = 'app-badge app-badge-';
    badgeClasses += totalItems === 0 ? 'warning' : 'primary';
    return badgeClasses;
  }
}

export default Cart;
