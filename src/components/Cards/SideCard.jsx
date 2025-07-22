import { useState } from "react";
import React from "react";

import logo from "../../global/logo.png";
import cover from "../../global/cover.jpg";

// import img2 from "../images/departure2.jpg";
// import img3 from "../images/departure3.jpg";
// import img4 from "../images/departure4.jpg";
// import img5 from "../images/departure5.jpg";

const images = [logo, cover];

const SideCard = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <a href="/your-target-link" className="block w-full max-w-md mx-auto">
      <div
        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="absolute inset-0 bg-blue-700 bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
          <div className="text-sm uppercase tracking-wider text-yellow-400">
            Group
          </div>
          <div className="text-3xl font-bold">DEPARTURES</div>
          <div className="text-4xl font-extrabold text-yellow-400 mt-2">
            2025
          </div>
          <div className="mt-4 bg-yellow-400 text-black font-semibold px-4 py-1 rounded-md">
            STARTING FROM ₹40,999
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault(); // prevent anchor click
                handleDotClick(index);
              }}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default SideCard;
