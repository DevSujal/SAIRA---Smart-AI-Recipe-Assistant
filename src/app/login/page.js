import React from "react";
import FormContainer from "../components/FormContainer";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
const Page = async () => {
  const session = await auth();
  if(session) {
    redirect("/");
  }
  return <FormContainer />;
}

export default Page;