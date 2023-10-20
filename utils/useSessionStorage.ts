import { useState } from "react";

const useSessionStorage = (key: string, initialValue: string[]) => {
  // Initialize a state variable to store the value from sessionStorage.
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      // Attempt to retrieve the value associated with the specified key from sessionStorage.
      const item = sessionStorage.getItem(key);
      // If a value exists for the key, parse it from JSON, otherwise use the initialValue.
      const parsedValue = item ? JSON.parse(item) : initialValue;
      return parsedValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Define a function to update the stored value in both state and sessionStorage.
  const setValue = (value: string) => {
    try {
      // Update the value in state.
      setStoredValue(value);

      if (typeof window !== "undefined") {
      // Store the value associated with the key in sessionStorage after converting it to a JSON string.
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Return the stored value and the setValue function.
  return [storedValue, setValue];
};

export default useSessionStorage;
