import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex text-center items-center my-1 text-white gap-10 justify-start w-full border-b border-white">
        <Link className="text-2xl mx-3 font-bold" href="/">
          LearnTechHub
        </Link>
        <div className="flex w-full justify-end gap-3 m-3 text-center items-center">
          <Link className="text-xl font-semibold" href="/courses">
            Explore Courses
          </Link>
          <Link
            className="p-2 font-medium border border-gray-100 sm:p-3 bg-white text-black rounded-xl hover:bg-inherit hover:text-white"
            href="/signup"
          >
            Sign-In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
