import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_INFO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import useFetchProductDetails from '../hooks/useFetchProductDetails';

const ProductDesc = ({}) => {
  const [productInfo, setProductInfo] = useState(null);
  const dispatch = useDispatch();

  // custom hook used for fetching product details
  useFetchProductDetails({ setProductInfo });

  const handleAddToCart = () => {
    dispatch(addToCart(productInfo));
  };

  return (
    <div className='md:p-20 md:w-4/5 md:mx-auto mt-24 p-10 flex flex-col md:flex-row md:justify-between'>
      {/* <div className='md:h-80 md:w-1/2'> */}
      <img className='md:w-1/3 md:h-80' src={productInfo?.image} alt='' />
      {/* </div> */}
      <div className='md:mt-10 mt-4  md:w-1/2 '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl '>{productInfo?.title} </h1>
          <p className='text-3xl'>₹ {productInfo?.price} </p>
          <p className=''>{productInfo?.description} </p>
          <button onClick={handleAddToCart} className='bg-orange-500 w-1/2 p-2 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
