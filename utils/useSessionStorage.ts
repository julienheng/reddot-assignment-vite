import { useState } from "react";

const useSessionStorage = (key: string, initialValue: string[]) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = sessionStorage.getItem(key);
      const parsedValue = item ? JSON.parse(item) : initialValue;
      return parsedValue;

    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);

      if (typeof window !== "undefined") {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
