import axios from 'axios';

export const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
};

export const fetchProductsByCategory = async (category: string) => {
  const url = category === 'all'
    ? 'https://fakestoreapi.com/products'
    : `https://fakestoreapi.com/products/category/${category}`;

  const response = await axios.get(url);
  return response.data;
};
