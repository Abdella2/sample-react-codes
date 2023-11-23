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
            <Item name={item.name} value={item.count} id={item.id} item={item}>
              <span>Item #{item.id}</span>&nbsp;&nbsp;
            </Item>
          </li>
        ))}
      </ul>
    );
  }
}

export default Items;
