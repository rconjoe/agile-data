import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpWOui1ixNxV1XZJfvYyJoZCHKOAczrNk",
  authDomain: "agile-learner.firebaseapp.com",
  projectId: "agile-learner",
  storageBucket: "agile-learner.appspot.com",
  messagingSenderId: "704105875117",
  appId: "1:704105875117:web:b15e607e174d522b23e824",
  measurementId: "G-TH7CGS95LF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
