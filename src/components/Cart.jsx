import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const Cart = () => {
  // getting cart items from redux store
  const cartItems = useSelector((store) => store.cart?.cartItems);

  const cartPriceTotal = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const cartItemTotal = cartItems?.length;
  if (cartItems.length === 0)
    return (
      <div className='absolute top-1/2 left-0 right-0 mx-auto text-center'>
        Your Cart is currently Empty{' '}
      </div>
    );
  return (
    <div className='md:w-1/2 mx-auto mt-28 mb-40'>
      {/* mapping over cart items */}
      {cartItems?.map((item, index) => (
        <CartCard key={item.id + index} itemDetails={item} />
      ))}
      <div className=' text-lg fixed z-20 bottom-0 bg-white left-0 md:w-1/2 mx-auto right-0 flex items-center border-t  justify-between py-10 px-2 md:p-10 '>
        <p>Total Items: {cartItemTotal}</p>
        <p>Total Price: ₹{cartPriceTotal} </p>

        <button className='p-2 bg-green-600 rounded text-white'>Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
