import React from "react";
import FlightCard from "../components/Cards/FlightCard";
import Cards from "../components/Cards/Cards";

const Flights = () => {
  return (
    <div className=" flex flex-col items start justify-center px-6 md:px-16 lg:px-24 xl:px-32  bg-[url(/src/assets/flight-hero.jpg)] bg-no-repeat bg-cover bh-center h-screen ">
      <div className="flex justify-center gap-10">
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
      <Cards />
    </div>
  );
};

export default Flights;
