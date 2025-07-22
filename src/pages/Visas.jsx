// import React from "react";

// const Visas = () => {
//   return <div>
//     this is visas</div>;
// };

// export default Visas;
import React, { useState } from "react";
import axios from "axios";

function Visas() {
  const [query, setQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHotels = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/hotels?query=${query}`
      );
      setHotels(res.data);
    } catch (error) {
      console.error("Error fetching hotels", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hotel Search</h2>
      <form onSubmit={fetchHotels}>
        <input
          type="text"
          placeholder="Search hotels..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      <div>
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <h4>{hotel.name}</h4>
              <p>{hotel.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Visas;
