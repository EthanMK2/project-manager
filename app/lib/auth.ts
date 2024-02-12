import { app } from "./firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseApp = app;

export async function login(formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  if (!data.email || !data.password) {
    console.log("no email, or, no password, or neither")
    return false
  }
  const email = data.email.toString()
  const password = data.password.toString()

  try {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("signed into firebase")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } catch(error) {
    console.log(error)
  }
}

export async function createAccount(formData: FormData) {

  // {"apiKey": "AIzaSyAaHe8q_KlpaF_YXHjmvYn4MHp1dt-cmGQ", "authDomain": "project-manager-78275.firebaseapp.com", "projectId": "project-manager-78275", "storageBucket": "project-manager-78275.appspot.com", "messagingSenderId": "485976781757", "appId": "1:485976781757:web:bdf522a8dcd9e86d1818d4", "measurementId": "G-9PHHQQT2HC"}

  // check for errors (client)
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("password-confirm")
  }

  if (!data.email || !data.password) {
    console.log("no email, or, no password, or neither")
    return false
  }

  const email = data.email.toString()
  const password = data.password.toString()
  const passwordConfirm = data.passwordConfirm?.toString() // do validation

  try {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("signed up")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });

  } catch (error) {
    console.log(error)
    return false
  }
  return true;
}
