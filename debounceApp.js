import React, { useState, useEffect } from "react";
import useDebounce from "./debouncing.js";

const App = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      // Replace with your actual API call
      console.log("API call with:", debouncedValue);
      // Example API call:
      // fetch(`https://api.example.com/search?query=${debouncedValue}`)
      //   .then(response => response.json())
      //   .then(data => console.log(data));
    }
  }, [debouncedValue]);

  return (
    <div className="app">
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default App