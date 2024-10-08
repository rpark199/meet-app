import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
     setCurrentNOE(parseInt(event.target.value, 10));
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        defaultValue={32}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;
