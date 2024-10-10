import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./Events.css";

const generateDays = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

const Calendar = ({ setDateSelected }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const daysInMonth = generateDays(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(
      Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())
    );
    const formattedDate = selectedDate.toISOString().split("T")[0];
    console.log(formattedDate);
    setDateSelected(formattedDate);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <h3>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h3>
        <button onClick={handleNextMonth}>
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div className="day-name" key={index}>
            {day}
          </div>
        ))}

        {daysInMonth.map((day, index) => (
          <div
            className="calendar-day"
            key={index}
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
