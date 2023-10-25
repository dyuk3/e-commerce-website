import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProduct } from '../features/productSlice';
import ProductCard from './ProductCard';
import ProductCategories from './ProductCategories';
import useGetProducts from '../hooks/useGetProducts';

const Products = () => {
  // custom hook for getting products based on the category
  useGetProducts();

  const products = useSelector((store) => store.products?.allProducts);

  if (!products) return null;

  return (
    <div className='md:p-10  mx-auto z-10'>
      <ProductCategories />

      {products.length === 0 && (
        <div className='text-center mx-auto md:text-3xl absolute top-1/2 left-0 right-0 '>
          Select a Category to shop
        </div>
      )}
      <div className='md:grid md:gap-y-10 md:gap-x-40 md:grid-cols-4 md:m-4 md:mx-20'>
        {products.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
