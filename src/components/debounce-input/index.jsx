import { useState, useCallback } from 'react';

// Debounce function moved outside the component
const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(null, args); // Use null as context, since this is not needed here
    }, delay);
  };
};

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

  // API call function
  const handleApiCall = async (val) => {
    try {
      const url = `https://api.frontendeval.com/fake/food/${val}`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Memoize the debounced function to prevent re-creation on every render
  const debouncedApiCall = useCallback(debounce(handleApiCall, 1000), []);

  // Handle input change
  const handleChange = (val) => {
    setValue(val);
    debouncedApiCall(val); // Call the debounced API function
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)} // Update value on change
        placeholder="Type food name..."
      />
      {data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
