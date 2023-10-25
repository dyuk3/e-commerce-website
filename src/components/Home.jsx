import React, { useEffect } from 'react';
import Header from './Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../features/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // firebase function to  handele the signing in and signing out of user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;

        dispatch(addUser({ uid: uid, displayName: displayName, userEmail: email }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
