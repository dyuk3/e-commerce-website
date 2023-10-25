// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARYRzpXDGgH7wgv-OEOID2CeKmGmlC2Uc',
  authDomain: 'e-commerce-website-aafe9.firebaseapp.com',
  projectId: 'e-commerce-website-aafe9',
  storageBucket: 'e-commerce-website-aafe9.appspot.com',
  messagingSenderId: '272000323641',
  appId: '1:272000323641:web:c3b4b37a2a337bc73cbde8',
  measurementId: 'G-D2KL8FR0JJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
