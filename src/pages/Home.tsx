import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProductsByCategory } from '../api/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

 
  const {
    data: categories,
    isLoading: loadingCategories,
    error: categoryError,
  } = useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  
  const {
    data: products,
    isLoading: loadingProducts,
    error: productError,
  } = useQuery<Product[]>({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory),
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Product Catalog</h1>

      
      {loadingCategories ? (
        <p>Loading categories...</p>
      ) : categoryError ? (
        <p>Error loading categories.</p>
      ) : (
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      )}

      
      {loadingProducts ? (
        <p>Loading products...</p>
      ) : productError ? (
        <p>Error loading products.</p>
      ) : (
        <div className="product-grid">
          {products?.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} width={100} />
              <h3>{product.title}</h3>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Rating:</strong> {product.rating?.rate}</p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
