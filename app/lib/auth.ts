"use client";

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

  } catch (error) {
    console.log(error)
  }
}

export async function createAccount(formData: FormData) {

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

  } catch (error) {
    console.log(error)
    return false
  }
  return true;
}
