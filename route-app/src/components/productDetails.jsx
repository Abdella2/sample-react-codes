import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  return <h1>Product details - {id}</h1>;
}

export default ProductDetails;
