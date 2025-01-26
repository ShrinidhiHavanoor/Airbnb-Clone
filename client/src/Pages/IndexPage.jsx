import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setplaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setplaces(response.data);
    });
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/places/" + place._id} key={place._id}>
            <div className="bg-gray-500 rounded-2xl flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-bold ">{place.address}</h2>
            <h3 className="text-sm  text-gray-500 leading-4">{place.title}</h3>
            <h3 className="mt-1">
              <span className="font-bold">₹{place.price}</span> per night
            </h3>
          </Link>
        ))}
    </div>
  );
}
