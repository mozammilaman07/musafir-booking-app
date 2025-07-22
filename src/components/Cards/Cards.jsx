import React from "react";
import "./Cards.css";

const Cards = () => {
  const cards = [
    {
      id: 1,
      img: "../src/global/75043_1.jpg",
      title: "Explore Sharjah",
      desc: "Visit one of the most beautiful cities in the world",
    },
    {
      id: 2,
      img: "../src/global/100617_6.jpg",
      title: "Worldwide visas",
      desc: "Our easy visa application process at great prices.",
    },
    {
      id: 3,
      img: "../src/global/94178_4.jpg",
      title: "Discover Dubai",
      desc: "Explore the best of Dubai with us",
    },
  ];
  return (
    <div className="cards ">
      {cards.map((card) => (
        <div key={card.id} className="mx-11">
          <div className="card-img">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="desc">
            <h1 className="text-xl pb-2">{card.title}</h1>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
