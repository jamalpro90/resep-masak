// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIXr3PDUfQAh0gltm-7yfp4sS-dEFT52M',
  authDomain: 'resep-masak-99.firebaseapp.com',
  projectId: 'resep-masak-99',
  storageBucket: 'resep-masak-99.appspot.com',
  messagingSenderId: '93063735602',
  appId: '1:93063735602:web:89ad09be03c9caab908f2b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider(app);
