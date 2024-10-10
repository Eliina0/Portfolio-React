import React, { useState } from "react";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (title === "") {
      newErrors.title = "Title is required!";
    }
    if (description === "") {
      newErrors.description = "Description is required!";
    }
    if (date === "") {
      newErrors.date = "Date is required!";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const event = {
        title: title,
        description: description,
        date: date,
      };

      const existingEvents = JSON.parse(localStorage.getItem("Events")) || [];
      const updatedEvents = [...existingEvents, event];

      localStorage.setItem("Events", JSON.stringify(updatedEvents));

      setTitle("");
      setDescription("");
      setDate("");
    }
  };

  return (
    <div className="event">
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">
            Title: <span> * </span>
          </label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
            }}
          />
        </div>
        {errors.title && <div className="error-message">{errors.title}</div>}

        <div className="input-group">
          <label htmlFor="description">
            Description: <span> *</span>
          </label>
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
            }}
          ></textarea>
        </div>
        {errors.description && (
          <div className="error-message">{errors.description}</div>
        )}

        <div className="input-group">
          <label htmlFor="date">
            Date: <span> * </span>
          </label>
          <input
            type="date"
            placeholder="Event Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
            }}
          />
        </div>
        {errors.date && <div className="error-message">{errors.date}</div>}

        <button type="submit" className="btn">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
