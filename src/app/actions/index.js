import { signIn } from "next-auth/react";

export async function doSocialLogin(formdata) {
  const action = formdata.get("action");
  console.log("action", action);
  await signIn(action, {
    callbackUrl: "/home", // Correct option for specifying redirection after sign-in
  }); 
}
