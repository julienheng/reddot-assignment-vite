/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./maincomponent.module.css";
import { useState } from "react";

//COMPONENTS
import SearchBar from "./SearchBar";
import DictionaryData from "./DictionaryData/DictionaryData";

type Props = {
  setSearchWord: (searchWord: string[]) => void;
  input: string;
  setInput: (input: string) => void;
  savedResults: string[];
  searchWord: string[];
  setSavedResults: (savedResults: string[]) => void;
  history: string;
  setHistory: (history: string) => void;
};

export default function MainComponent({
  input,
  setInput,
  setSearchWord,
  searchWord,
  history,
  savedResults,
  setSavedResults,
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      // CHECK FOR RESPONSE STATUS CODE
      if (response.status === 200) {
        const result = await response.json();
        setData(result);
        setInput("");

        // Update the search word state and save it to localStorage
        setSearchWord([...searchWord, input]);

        // Update the saved results state and save it to localStorage
        setSavedResults([...savedResults, result]);
      } else {
        if (response.status === 404) {
          setError(
            "Sorry, we couldn't find definitions for the word you were looking for. Please try again."
          );
        }
      }
    } catch (error) {
      setError(
        "Sorry, we couldn't find definitions for the word you were looking for. Please try again."
      );
      console.error("Error fetching data:", error);
    }
  };

  console.log(data);
  console.log(searchWord);
  console.log(savedResults);

  return (
    <div className={styles.maincomponent}>
      <div className={styles.component}>
        <h1 className={styles.heading}>English API Dictionary</h1>
        <SearchBar
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
        {data && data.length > 0 ? (
          <DictionaryData
            data={data}
            savedResults={savedResults}
            history={history}
          />
        ) : (
          error && <p>{error}</p>
        )}
      </div>
    </div>
  );
}

// const [debouncedInput, setDebouncedInput] = useState<string>("");

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       setDebouncedInput(input);
//     }, 1000);

//     return () => clearTimeout(delayDebounceFn);
//   }, [input]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
//       );

//       // CHECK FOR RESPONSE STATUS CODE
//       if (response.status === 200) {
//         const result = await response.json();
//         setData(result);
//         setInput("");

//         // Update the search word state and save it to localStorage
//         setSearchWord(Array.from(new Set([...searchWord, input])));

//         // Update the saved results state and save it to localStorage
//         setSavedResults(Array.from(new Set([...savedResults, result])));
//       } else {
//         setError(
//           "Sorry, we couldn't find definitions for the word you were looking for. Please refresh and try again."
//         );
//       }
//     } catch (error) {
//       setError(
//         "Sorry, we couldn't find definitions for the word you were looking for. Please refresh and try again."
//       );
//       console.error("Error fetching data:", error);
//     }
//   };

//   if (input) {
//     fetchData();
//   }
// }, [
//   input,
//   setInput,
//   setSearchWord,
//   savedResults,
//   setSavedResults,
//   searchWord,
// ]);
