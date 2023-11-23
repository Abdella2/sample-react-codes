import { Component, Fragment } from 'react';

class Item extends Component {
  state = {
    item: this.props.item
  };
  handleAddItemToCart = (id) => {
    let state = { ...this.state };

    state.item.count--;

    this.setState({
      ...state
    });
  };

  render() {
    console.log(this.props);
    const { name, value, id } = this.props;
    return (
      <Fragment>
        {this.props.children}
        {name} - {this.state.item.count}
        <button
          style={{ marginLeft: 10 }}
          onClick={() => this.handleAddItemToCart(id)}>
          add
        </button>
      </Fragment>
    );
  }
}

export default Item;
