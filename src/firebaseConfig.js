import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxLdcJRw29go__38zIIVoADv3eUn9A8zo',
  authDomain: 'zenotes-51e44.firebaseapp.com',
  projectId: 'zenotes-51e44',
  storageBucket: 'zenotes-51e44.appspot.com',
  messagingSenderId: '179204111917',
  appId: '1:179204111917:web:92df221ed9453ac399c2a4',
  measurementId: 'G-EX50FCK3Y8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
