import React, { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const changeForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <img
        className='w-full h-full fixed object-cover'
        src='https://www.jeffbullas.com/wp-content/uploads/2022/04/The-10-Best-B2B-eCommerce-Websites-For-Business-Growth.jpg'
        alt=''
      />
      <div className='absolute top-1/2  left-0 right-0 mx-auto transform translate-x-0 translate-y-[-50%]  w-1/3'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-white rounded p-10 px-20 flex flex-col gap-10 '
        >
          <h1 className='text-3xl font-medium'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          <div className='flex flex-col'>
            {/* <label>Email</label> */}
            <input
              className='bg-gray-200/60 rounded p-2 '
              type='text'
              placeholder='Email'
              required
            />
          </div>
          <div className='flex flex-col'>
            {/* <label>Password</label> */}
            <input
              className='bg-gray-200/60 rounded p-2 '
              type='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='flex flex-col'>
            <button type='submit' className='bg-black text-white py-2 rounded font-medium'>
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
          <div>
            {isSignInForm ? (
              <span>
                New here?{' '}
                <a href='/' onClick={changeForm}>
                  Sign up now
                </a>
              </span>
            ) : (
              <span>
                Already a User?{' '}
                <a href='/' onClick={changeForm}>
                  Sign in now
                </a>
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
