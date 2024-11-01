import { signIn, signOut } from "next-auth/react";

export async function doSocialLogin(formdata) {
  const action = formdata.get("action");
  await signIn(action, {
    callbackUrl: "/", // Correct option for specifying redirection after sign-in
  });
}

export async function doLogout() {
  await signOut({ callbackUrl: "/login" });
}

export async function doCredentialLogin(formdata) {
  try {
    const email = formdata.get("email");
    const password = formdata.get("password");
    const userName = formdata.get("userName");
    const res = await signIn("credentials", { 
      userName,
      email,
      password,
      redirect : false
     });

     return res;
    
  } catch (error) {
    console.error("Error during sign in:", error.message);
    throw new Error(error.message);
  }
}
