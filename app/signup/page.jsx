import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-3 h-screen text-white justify-center items-center">
      <div className="text-3xl my-2 font-bold">Sign-Up</div>
      <Link
        href=""
        className="flex p-2 px-4 rounded-full font-semibold items-center text-center bg-white hover:bg-inherit hover:text-white text-zinc-950 border border-white"
      >
        Sign up with Google
      </Link>
      <p>OR</p>
      <form className="flex flex-col">
        <label className="p-1">Email: </label>
        <input
          className="p-2 mb-2 rounded-xl text-black"
          type="email"
          placeholder="email here..."
        />
        <label className="p-1">Password:</label>
        <input
          className="p-2 rounded-xl text-black"
          type="password"
          placeholder="password here..."
        />
        <button className="p-2 border border-white bg-white text-black font-semibold rounded-full my-2 hover:bg-inherit hover:text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default page;
