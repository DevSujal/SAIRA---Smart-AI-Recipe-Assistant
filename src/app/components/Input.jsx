"use client";

const Input = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-24 backdrop-blur-10">
      <h1 className="font-bold text-3xl">Welcome To Our Ai Recipe Assistant</h1>
      <div className="input-container w-2/5">
        <input
          type="text"
          id="ingredients"
          name="ingre"
          placeholder="search ingredients"
          className="border rounded-3xl text-black p-2 w-full"
        />
      </div>
    </div>
  );
};

export default Input;
