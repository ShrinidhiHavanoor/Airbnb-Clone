import React from "react";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = React.useState("");
  const [checkout, setCheckout] = React.useState("");
  const [numberOfGuests, setNumberOfGuests] = React.useState(1);
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
      Price: ₹{place?.price ? place.price : "N/A"} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className=" py-3 px-4 ">
            <label>check in:</label>
            <input
              type="date"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className=" py-3 px-4 border-l">
            <label>check out:</label>
            <input
              type="date"
              value={checkout}
              onChange={(ev) => setCheckout(ev.target.value)}
            />
          </div>
        </div>
        <div className=" py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
            min={1}
          />
        </div>
      </div>

      <button className="primary mt-4">Book this place</button>
    </div>
  );
}
