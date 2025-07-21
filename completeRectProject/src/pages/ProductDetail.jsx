import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  return <h2>Details for Product ID: {productId}</h2>;
}
