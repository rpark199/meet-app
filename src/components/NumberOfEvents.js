const NumberOfEvents = ({ setCurrentNOE }) => {
  const handleInputChanged = (event) => {
      const value = event.target.value;
  };

  return (
      <div id="number-of-events">
          <label>
              Number of Events:
          <input 
          type="text"
          defaultValue="32"
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
          />
          </label>
      </div>
  )
};

export default NumberOfEvents;