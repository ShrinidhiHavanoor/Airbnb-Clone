import React, { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <nav>
        <AccountNav />
        <div>
          {bookings?.length > 0 &&
            bookings.map((booking) => (
              <div
                className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
                key={booking._id}
              >
                <div className="w-48">
                  <PlaceImg place={booking.place} />
                </div>
                <div className="py-3 pr-3 grow">
                  <h2 className="text-xl">{booking.place.title}</h2>
                  <div className="">
                    <div className="flex gap-1">
                      {format(new Date(booking.checkIn), "dd-MM-yyyy")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                      {format(new Date(booking.checkout), "dd-MM-yyyy")}
                    </div>
                    <div>
                      {differenceInCalendarDays(
                        new Date(booking.checkout),
                        new Date(booking.checkIn)
                      )}{" "}
                      nights
                      <br />
                      Total price: ₹{booking.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </nav>
    </div>
  );
}
