import { auth } from "../../auth";
import Input from "../components/Input"
import React from "react";
import { redirect } from "next/navigation";
const HomePage = async () => {
  const session = await auth();
  if (!session) {
    console.log('session');
    redirect("/");
  }

  return (
    <div>
      <div className="fixed">

      <h1>{session?.user?.name}</h1>
      <img
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
        />
        </div>

      <div className="flex justify-center items-center wfull h-full">
        <Input />
      </div>
    </div>
  );
};

export default HomePage;
