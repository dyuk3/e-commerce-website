import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

const CartCard = ({ itemDetails }) => {
  const { title, id, image, price } = itemDetails;

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='flex w-full items-center gap-10 border-b-2 p-4 relative '>
      <img className='w-40 h-40' src={image} alt='' />
      <div>
        <p className='text-lg'>{title}</p>
        <p className='text-xl'>₹ {price} </p>
      </div>
      <button className='text-3xl absolute top-0 right-2' onClick={handleRemoveItem}>
        x
      </button>
    </div>
  );
};

export default CartCard;
