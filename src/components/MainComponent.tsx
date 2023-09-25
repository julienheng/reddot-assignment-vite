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
  setHistory,
  savedResults,
  setSavedResults,
}: Props) {
  const [data, setData] = useState<object[]>([]);
  const [error, setError] = useState<string>("");

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
        setHistory(input);

        // Update the search word state and save it to localStorage
        setSearchWord(Array.from(new Set([input, ...searchWord])));

        // Update the saved results state and save it to localStorage
        setSavedResults(Array.from(new Set([result, ...savedResults])));
        console.log(response.status);
      } else {
        if (response.status === 404) {
          setError(
            "Sorry, we couldn't find definitions for the word you are looking for. Please try again!"
          );
          setData([]);
          setHistory("");
        }
      }
    } catch (error) {
      setError(
        "Sorry, we couldn't find definitions for the word you are looking for. Please try again!"
      );
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.maincomponent}>
      <div className={styles.component}>
        <h1 className={styles.heading}>English API Dictionary</h1>
        <SearchBar
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />

        {(data && data.length > 0) || history ? (
          <DictionaryData
            data={data}
            savedResults={savedResults}
            history={history}
          />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
