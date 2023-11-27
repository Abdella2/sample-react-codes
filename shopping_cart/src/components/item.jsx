import { Component, Fragment } from 'react';

class Item extends Component {
  // state = {
  //   item: this.props.item
  // };
  // handleAddItemToCart = (id) => {
  //   let state = { ...this.state };

  //   state.item.count--;

  //   this.setState({
  //     ...state
  //   });
  // };

  render() {
    console.log(this.props);
    const { name, value, id } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-1">{this.props.children}</div>
          <div className="col-1">
            {name} - {this.props.item.count}
          </div>
          <div className="col">
            {' '}
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: 10 }}
              // onClick={() => this.handleAddItemToCart(id)}>
              onClick={() => this.props.onAddItem(this.props.item)}>
              +
            </button>
            <button
              disabled={value <= 0}
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onDecreaseItem(this.props.item)}>
              -
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(id)}>
              X
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Item;
