import { signOut } from 'firebase/auth';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const itemCount = useSelector((store) => store?.cart?.cartItems.length);

  // firebase function to redirect user to login page when logged out
  const handleSignOut = () => {
    signOut(auth)
      //if signout is successful
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        // An error happened with signout.
      });
  };

  return (
    <div className='fixed top-0  w-full bg-blue-500 md:px-20 px-2 h-20 flex items-center text-base justify-between text-white z-50'>
      <div>
        <Link to={'/products'}>
          <h1 className='md:text-3xl text-xl'>E-Commerce</h1>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        {/* conditionally display user greeting message on login */}
        {user && <span className='md:block hidden'>Welcome, {user.displayName}</span>}
        {user ? (
          <button onClick={handleSignOut} className='bg-red-500 rounded p-2'>
            Logout
          </button>
        ) : (
          <Link to='/'>
            <button className='bg-black rounded text-white p-2'>Login/Signup</button>
          </Link>
        )}
        <div>
          <Link className='flex items-center gap-2' to={'/cart'}>
            <div className='relative'>
              <span className='bg-yellow-400 absolute -top-3 rounded-full px-1 -right-2 text-sm'>
                {itemCount}{' '}
              </span>

              <AiOutlineShoppingCart size={20} />
            </div>
            {/* {itemCount && <span className='bg-black absolute top-0 right-0'>{itemCount} </span>} */}
            <button className='md:block hidden'>Your Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
