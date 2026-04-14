"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/destinations").then((res) => {
      setLocations(res.data);
    });
  }, []);

  return (
   <div>
 
      {locations.map((loc) => (
        <div key={loc._id}>
          <h2>{loc.name}</h2>
          <p>{loc.description}</p>
          {loc.image}
        </div>
      ))}
    </div>
  );
}