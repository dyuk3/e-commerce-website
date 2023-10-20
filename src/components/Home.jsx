import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Home = () => {
  return (
    <div className='bg-blue-500 px-20 h-20  flex items-center justify-between text-white'>
      <div>
        <h1 className='text-3xl'>E-Commerce</h1>
      </div>
      <div className='flex gap-4'>
        <button className='bg-black rounded text-white p-2'>Login/Signup</button>
        <div className='flex items-center gap-2'>
          <AiOutlineShoppingCart />
          <button>Your Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
