import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import SearchBox from "./SearchBox";

const EventsList = ({ dateSelected }) => {
  console.log(dateSelected);

  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("Events")) || []
  );
  const [searchString, setSearchString] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchString.toLowerCase()) ||
      event.description.toLowerCase().includes(searchString.toLowerCase());
    const matchesDate = !dateSelected || event.date === dateSelected;
    return matchesSearch && matchesDate;
  });

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
    localStorage.setItem("Events", JSON.stringify(updatedEvents));
  };

  return (
    <div className="events-list">
      <h2>Events List</h2>
      <SearchBox
        searchString={searchString}
        onSearchChange={(e) => setSearchString(e.target.value)}
      />
      {filteredEvents.length > 0 ? (
        <div>
          <ul>
            {filteredEvents.map((event, index) => (
              <li key={index}>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p>{event.date}</p>
                </div>
                <AiOutlineDelete
                  className="delete-icon"
                  onClick={() => handleDeleteEvent(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventsList;
