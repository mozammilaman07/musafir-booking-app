import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <div className="h-16 bg-linear-to-r from-cyan-500 to-blue-500 py-4 text-white">
        <div className="flex flex-row... gap-5 ml-15">
          <div className="text-2xl">
            <RxHamburgerMenu />
          </div>
          <div className="col-span-2 ... text-2xl ml-10">
            <NavLink to="/">
              Plumtrips<span className="text-yellow-400">.com</span>{" "}
            </NavLink>
          </div>
          <div className="ml-15">
            <ul className="flex flex-row... gap-4">
              <li>
                <NavLink to="/flights">Flights</NavLink>
              </li>
              <li>
                <NavLink to="/hotels">Hotels</NavLink>
              </li>
              <li>
                <NavLink to="/visas">Visas</NavLink>
              </li>
              <li>
                <NavLink to="/holidays">Holidays</NavLink>
              </li>

              <li className="">
                <div className="text-yellow-400">Group</div>
                <div className="mb-14">Departures</div>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/offers">Offers</NavLink>
              </li>
              <li>
                <NavLink to="/business">Business</NavLink>
              </li>
              <li>
                <NavLink to="/mytrips">My trips</NavLink>
              </li>
              <li>
                <NavLink to="/cruises">Cruises</NavLink>
              </li>
              <li>
                <img src="../src/assets/flag.png" className="w-5 mt-1" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
