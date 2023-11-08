import { Component, Fragment } from 'react';

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

  render() {
    return (
      <Fragment>
        <h1 style={{ color: 'gray' }}>Well Come to shopping cart</h1>
        {this.showTotalItems()}
        <br />
        <br />
        <button>Add</button>
      </Fragment>
    );
  }

  showTotalItems() {
    const { totalItems } = this.state;
    return (
      <span style={this.totalStyle}>
        {totalItems === 0 ? 'Empty' : totalItems}
      </span>
    );
  }
}

export default Cart;
