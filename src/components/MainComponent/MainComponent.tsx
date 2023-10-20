/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./main-component.module.css";
import { useState } from "react";

//COMPONENTS
import SearchBar from "../SearchBar/SearchBar";
import DictionaryData from "../DictionaryData/DictionaryData";
import WordOfDay from "../WordOfDay/WordOfDay";

type Props = {
  nav: boolean;
  input: string;
  history: string;
  wordOfDay: object[];
  searchWord: string[];
  savedResults: string[];
  setInput: (input: string) => void;
  setHistory: (history: string) => void;
  setSearchWord: (searchWord: string[]) => void;
  setSavedResults: (savedResults: string[]) => void;
};

export default function MainComponent({
  nav,
  input,
  history,
  searchWord,
  wordOfDay,
  savedResults,
  setInput,
  setHistory,
  setSearchWord,
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

      // IF RESPONSE IS SUCCESSFUL
      if (response.ok) {
        const result = await response.json();

        setData(result);
        setInput("");
        setHistory(input);

        // UPDATE SEARCH WORD & SAVE TO SESSION STORAGE
        setSearchWord(Array.from(new Set([input, ...searchWord])));

        // UPDATE SEARCH RESULTS & SAVE TO SESSION STORAGE
        setSavedResults(Array.from(new Set([result, ...savedResults])));
        
      } else {
        // IF RESPONSE IS FAILED
        setError(
          `Sorry, we couldn't find any definition for "${input}". Please try again!`
        );
        setData([]);
        setHistory("");
        setInput("");
      }
    } catch (error) {
      setError(
        "Sorry, we couldn't find definitions for the word you are looking for. Please try again!"
      );
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={`${styles.maincomponent} ${nav && styles.blur}`}>
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
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <WordOfDay wordOfDay={wordOfDay} />
        )}
      </div>
    </div>
  );
}
