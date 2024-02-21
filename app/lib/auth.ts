"use client";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from '@/app/lib/firebase';

// export async function login(formData: FormData) {
//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password")
//   }
//   if (!data.email || !data.password) {
//     console.log("no email, or, no password, or neither")
//     return false
//   }
//   const email = data.email.toString()
//   const password = data.password.toString()

//   try {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log("signed into firebase");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function createAccount(formData: FormData) {

//   // check for errors (client)
//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//     passwordConfirm: formData.get("password-confirm")
//   }

//   if (!data.email || !data.password) {
//     console.log("no email, or, no password, or neither")
//     return false
//   }

//   const email = data.email.toString()
//   const password = data.password.toString()
//   const passwordConfirm = data.passwordConfirm?.toString() // do validation

//   try {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         console.log("signed up");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage)
//         // ..
//       });

//   } catch (error) {
//     console.log(error)
//     return false
//   }
//   return true;
// }
