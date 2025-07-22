import React from "react";
import { NavLink } from "react-router-dom";
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <div className=" flex flex-col items start justify-center px-6 md:px-16 lg:px-24 xl:px-32  bg-[url(/src/global/bg.png)] bg-no-repeat bg-cover bh-center h-screen ">
        <div className="m-auto w-160 mt-18">
          <button className="mr-5 h-12 text-white">
            <NavLink to="/flights"> Flight</NavLink>
          </button>
          <button className="h-12 text-white">Hotels</button>
          <form action="" className="grid grid-cols-4 grid-rows-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Hotel location"
              className="col-span-4 bg-white h-12"
            />
            <input
              type="date"
              name=""
              id=""
              placeholder="check-in on"
              className="bg-white h-12 col-span-2"
            />
            <input
              type="date"
              name=""
              id=""
              placeholder="check-out on"
              className="bg-white h-12 col-span-2"
            />
            <p className="h-12 bg-white grid-cols-1 ">Room 1</p>
            <select name="" id="" className="grid-cols-2 h-12 bg-white ">
              <option value="1">1 adult</option>
              <option value="1">2 adults</option>
              <option value="1">3 adults</option>
              <option value="1">4 adults</option>
            </select>
            <select name="" id="" className="col-span-2 h-12 bg-white ">
              <option value="1">0 children</option>
              <option value="1">1 children</option>
              <option value="1">2 children</option>
              <option value="1">3 children</option>
            </select>
            <p className="col-span-3 pl-8 text-white">add another room</p>
            <button className="bg-yellow-400">Find Hotels</button>
          </form>
        </div>
        <div className="">
          <Cards />
        </div>
      </div>
      <div className="bg-blue-400 w-200 h-20 m-auto mt-15 flex flex-col place-content-center ">
        <h1 className="text-white m-auto text-2xl">WHAT OUR TRAVELLERS</h1>
        <h1 className="text-white m-auto text-2xl">SAY ABOUT US</h1>
      </div>
      <div className="mt-10 mx-32">
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
