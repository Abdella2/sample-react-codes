import { Component, Fragment } from 'react';
import '../App.css';

class Cart extends Component {
  state = {
    totalItems: 0,
    items: [
      { name: 'banana', count: 10 },
      { name: 'orange', count: 20 },
      { name: 'mango', count: 50 }
    ]
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
    console.log('totalItems', this);
  }

  render() {
    return (
      <Fragment>
        <h1 style={{ color: 'gray' }}>Well Come to shopping cart</h1>
        {this.showTotalItems()}
        <br />
        <br />
        <div>{this.renderItems()}</div>

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

  renderItems() {
    return this.state.items.length === 0 ? (
      <p>There is no item</p>
    ) : (
      <ul style={{ listStyle: 'none', padding: 10 }}>
        {this.state.items.map((item) => (
          <li key={item.name}>
            {item.name} - {item.count}
          </li>
        ))}
      </ul>
    );
  }
}

export default Cart;
