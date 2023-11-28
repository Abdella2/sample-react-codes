import _ from 'lodash';
import { Component } from 'react';
class TableBody extends Component {
  renderCell = (item, column) => {
    return _.get(item, column.path) || column.content(item);
  };

  createKey(item, column) {
    return item._id + (column.path || column.key);
  }

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
