import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';
import useGetProductCategories from '../hooks/useGetProductCategories';

// custom hook for getting product categories
const ProductCategories = () => {
  //using custom hook for getting product categories
  useGetProductCategories();
  const allCategories = useSelector((store) => store.products?.productCategories);

  return (
    <div className='mb-10 mt-20'>
      <div>
        <h1 className='text-center text-2xl p-6 m-4'>Shop By Category</h1>
      </div>
      <div className=' grid grid-cols-2 gap-y-10 md:flex p-4 md:w-1/2 md:mx-auto md:justify-between md:mt-8'>
        {/* mapping over the result of product categories */}
        {allCategories?.map((category) => (
          <CategoryCard key={category} name={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
