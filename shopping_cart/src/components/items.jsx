import { Component, Fragment } from 'react';
import Item from './item';

class Items extends Component {
  state = {
    items: [
      { id: 1, name: 'banana', count: 10 },
      { id: 2, name: 'orange', count: 20 },
      { id: 3, name: 'mango', count: 50 }
    ]
  };

  constructor(props) {
    super(props);
    this.props.onUpdateTotalProducts(this.state.items.length);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length)
      this.props.onUpdateTotalProducts(this.state.items.length);
  }

  handleAddItem = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);

    items[index] = { ...item };
    items[index].count++;
    this.setState({
      items
    });

    this.props.onIncreaseCart();
  };

  handleDelete = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items
    });
  };

  handleReset = () => {
    const items = this.state.items.map((item) => ({ ...item, count: 0 }));
    this.setState({ items });

    this.props.onResetCart();
  };

  render() {
    return <Fragment>{this.renderItems()}</Fragment>;
  }

  renderItems() {
    return this.state.items.length === 0 ? (
      <p>There is no item</p>
    ) : (
      <Fragment>
        <button onClick={this.handleReset}>Reset</button>
        <ul style={{ listStyle: 'none', padding: 10 }}>
          {this.state.items.map((item) => (
            <li key={item.name}>
              <Item
                name={item.name}
                value={item.count}
                id={item.id}
                item={item}
                onAddItem={this.handleAddItem}
                onDelete={this.handleDelete}>
                <span>Item #{item.id}</span>&nbsp;&nbsp;
              </Item>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Items;
