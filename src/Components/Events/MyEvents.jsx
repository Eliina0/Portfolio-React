import React, { useState } from "react";
import EventForm from "./EventForm";
import Calendar from "./Calendar";
import "./Events.css";
import EventsList from "./EventsList";

const MyEvents = () => {
  const [dateSelected, setDateSelected] = useState("");
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("Events")) || []
  );

  return (
    <section className="my-events">
      <h2>My Events</h2>
      <div className="add-events">
        <Calendar setDateSelected={setDateSelected} />
        <EventForm />
      </div>
      <EventsList dateSelected={dateSelected} />
    </section>
  );
};

export default MyEvents;
