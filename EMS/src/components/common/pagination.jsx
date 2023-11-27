import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Pagination extends Component {
  pages = () => {
    const totalPages = Math.ceil(this.props.totalItems / this.props.pageSize);
    if (totalPages === 1) return [];

    let pages = [];
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }
    return pages;
  };

  render() {
    const { currentPage, onPageChange } = this.props;
    const pages = this.pages();
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                currentPage == page ? 'page-item active' : 'page-item'
              }>
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
