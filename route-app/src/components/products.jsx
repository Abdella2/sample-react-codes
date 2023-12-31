import queryString from 'query-string';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
  const { sortBy } = queryString.parse(useLocation().search);
  return (
    <Fragment>
      <h1>Products sorted by - {sortBy}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Products;
