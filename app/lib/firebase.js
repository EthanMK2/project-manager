import { initializeApp } from 'firebase/app';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaHe8q_KlpaF_YXHjmvYn4MHp1dt-cmGQ",
  authDomain: "project-manager-78275.firebaseapp.com",
  projectId: "project-manager-78275",
  storageBucket: "project-manager-78275.appspot.com",
  messagingSenderId: "485976781757",
  appId: "1:485976781757:web:bdf522a8dcd9e86d1818d4",
  measurementId: "G-9PHHQQT2HC"
};

// Remember to assign (call) this app in components when needed
export const app = initializeApp(firebaseConfig);
