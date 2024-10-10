import React from "react";

const SearchBox = ({ searchString, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchString}
      onChange={onSearchChange}
      className="search-box"
    />
  );
};

export default SearchBox;
