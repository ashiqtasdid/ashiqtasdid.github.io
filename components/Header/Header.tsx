import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="pt-5 fixed top-0 w-full">
      <div className="hidden md:flex justify-center items-center ">
        <ul className="flex shadow-lg space-x-7 font-normal px-5 py-3 bg-opacity-25 text-gray-500 bg-gradient-to-bl from-slate-800 to-slate-900 rounded-full">
         <Link href='#home'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Home</li> </Link>
         <Link href='#about'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">About</li> </Link>
         <Link href='#projects'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Projects</li> </Link>
         <Link href='#skills'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Skills</li> </Link>
         <Link href='#experience'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Experience</li> </Link>
         <Link href='#contact'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Contact</li> </Link>
         <Link href='#blogs'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Blogs</li> </Link>
        </ul>
      </div>
      <div className="md:hidden flex justify-center items-center">
        <div className="space-y-1">
        <ul className="flex shadow-lg space-x-2 font-normal px-5 py-3 bg-opacity-25 text-gray-500 bg-gradient-to-bl from-slate-800 to-slate-900 rounded-full">
          <Link href='#home'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Home</li> </Link>
          <Link href='#about'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">About</li> </Link>
          <Link href='#projects'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Projects</li> </Link>
          <Link href='#skills'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Skills</li> </Link>
          
        </ul>
        <ul className="flex shadow-lg font-normal space-x-2 px-5 py-3 bg-opacity-25 text-gray-500 bg-gradient-to-bl from-slate-800 to-slate-900 rounded-full">
        <Link href='#experience'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Experience</li> </Link>
          <Link href='#contact'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Contact</li> </Link>
          <Link href='#contact'> <li className="cursor-pointer hover:text-gray-100 transition-colors duration-200">Blogs</li> </Link>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
