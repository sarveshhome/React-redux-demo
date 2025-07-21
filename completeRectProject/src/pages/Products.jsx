import React from 'react';
import useApi from '../hooks/useApi';

const Products = () => {
  const { data, loading, error, refetch } = useApi('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="products-grid">
        {data && data.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
