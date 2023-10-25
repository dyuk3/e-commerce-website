import React, { useRef, useState } from 'react';
import validateData from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const changeForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    const error = validateData(email.current.value, password.current.value);
    setErrorMsg(error);

    if (error) return;

    //sign up logic
    if (!isSignInForm) {
      //creating a user with the provided details
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate('/products');
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const erroMsg = error.message;
          setErrorMsg(errorCode + ': ' + erroMsg);
        });
    } else {
      //sign in logic for already exisiting user
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // console.log(auth.currentUser);
          navigate('/products');
        })
        .catch((error) => {
          //error with signing in
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ': ', errorMessage);
        });
    }
  };

  return (
    <div>
      <div className='fixed w-screen'>
        <img
          className='w-full h-screen  object-cover -z-10 '
          src='https://www.jeffbullas.com/wp-content/uploads/2022/04/The-10-Best-B2B-eCommerce-Websites-For-Business-Growth.jpg'
          alt=''
        />
      </div>
      <div className='absolute  top-1/2  left-0 right-0 mx-auto transform translate-x-0 translate-y-[-50%]  md:w-1/3 z-0'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-white rounded p-10 px-20 flex flex-col gap-10 z-0'
        >
          <h1 className='text-3xl font-medium'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {/* showing the name input if the form is for sign up */}
          {!isSignInForm && (
            <div className='flex flex-col'>
              <input
                className='bg-gray-200/60 rounded p-2 '
                type='text'
                placeholder='Enter your Name'
                ref={userName}
                required
              />
            </div>
          )}
          <div className='flex flex-col'>
            <input
              className='bg-gray-200/60 rounded p-2 '
              type='email'
              placeholder='Email'
              ref={email}
              required
            />
          </div>
          <div className='flex flex-col'>
            <input
              className='bg-gray-200/60 rounded p-2 '
              type='password'
              placeholder='Enter your password'
              ref={password}
              required
            />
          </div>
          {/* section for displaying errors in form validation */}
          {errorMsg && <div>{errorMsg} </div>}
          <div className='flex flex-col '>
            <button onClick={handleSignIn} className='bg-black text-white py-2 rounded font-medium'>
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
