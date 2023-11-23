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

  handleAddItem = (id) => {
    const items = this.state.items;
    const index = this.state.items.findIndex((item) => item.id === id);

    items[index].count--;
    this.setState({
      items
    });
  };

  handleDelete = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items
    });
  };

  render() {
    return <Fragment>{this.renderItems()}</Fragment>;
  }

  renderItems() {
    return this.state.items.length === 0 ? (
      <p>There is no item</p>
    ) : (
      <ul style={{ listStyle: 'none', padding: 10 }}>
        {this.state.items.map((item) => (
          <li key={item.name}>
            <Item
              name={item.name}
              value={item.count}
              id={item.id}
              item={item}
              onAddItem={(id) => this.handleAddItem(id)}
              onDelete={(id) => this.handleDelete(id)}>
              <span>Item #{item.id}</span>&nbsp;&nbsp;
            </Item>
          </li>
        ))}
      </ul>
    );
  }
}

export default Items;
