
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDnmjabJbaHZbjMUF9BIDyUYEUMhOj-Zpg",
  authDomain: "vcardsdp.firebaseapp.com",
  projectId: "vcardsdp",
  storageBucket: "vcardsdp.appspot.com",
  messagingSenderId: "700631302741",
  appId: "1:700631302741:web:4a086a7d7d3e06dab6cadc",
  measurementId: "G-BN6FLWYRFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage()