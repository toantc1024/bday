import React from "react";

const Navbar = () => {
  return (
    <div className="navbar fixed z-[999] top-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold   rounded-box w-52"
          >
            <li>
              <a>One</a>
            </li>
            <li>
              <a>Two</a>
            </li>

            <li>
              <a>And three</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost hover:bg-sky-400 hover:text-white text-xl border-[4px] rounded-xl border-gray-300 border-dashed">
          user.tag
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>One</a>
          </li>
          <li>
            <a>Two</a>
          </li>

          <li>
            <a>And three</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">:3</a>
      </div>
    </div>
  );
};

export default Navbar;
