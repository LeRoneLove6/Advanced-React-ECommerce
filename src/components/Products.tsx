import React from 'react';

type ProductType = {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity?: number;
};

type ProductProps = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
};

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {product.image && <img src={product.image} alt={product.name} width={100} />}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
