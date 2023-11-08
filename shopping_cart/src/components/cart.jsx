import { Component, Fragment } from 'react';

class Cart extends Component {
  state = {
    totalItems: 0
  };
  render() {
    return (
      <Fragment>
        <h1>Well Come to shopping cart</h1>
        {this.showTotalItems()}
        <br />
        <br />
        <button>Add</button>
      </Fragment>
    );
  }

  showTotalItems() {
    const { totalItems } = this.state;
    return <span>{totalItems === 0 ? 'Empty' : totalItems}</span>;
  }
}

export default Cart;
