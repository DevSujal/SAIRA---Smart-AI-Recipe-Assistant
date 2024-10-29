import React from "react";
import { auth } from "/src/auth";
import { redirect } from "next/navigation";
const Authenticated = async ({ children }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return <></>;
};

export default Authenticated;
