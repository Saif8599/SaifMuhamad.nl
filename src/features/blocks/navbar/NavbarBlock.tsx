import React, { useState } from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarBlock: React.FC<NavbarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="flex items-center justify-between flex-wrap bg-white py-4 md:px-12 shadow border-solid border-t-2 border-blue-700"
    >
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">Logo</span>
        </div>
        <div className="block lg:hidden ">
          <button
            id="nav"
            onClick={toggleNav}
            type="button"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isNavOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-blue-500 hover:bg-blue-500 transition-all duration-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-blue-500 hover:bg-blue-500 transition-all duration-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-blue-500 hover:bg-blue-500 transition-all duration-500"
          >
            Contacts
          </a>
        </div>
        <div className="relative mr-2 text-gray-600 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <a
            href="#"
            className="block text-md px-4 py-1 rounded text-blue-700 font-bold hover:text-white mt-4 lg:mt-0 border-blue-500 hover:bg-blue-500 transition-all duration-500"
          >
            login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlock;
