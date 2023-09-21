/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./maincomponent.module.css";
import { useState, useEffect } from "react";

//COMPONENTS
import SearchBar from "./SearchBar";
import DictionaryData from "./DictionaryData/DictionaryData";

type Props = {
  open: boolean;
  setSearchWord: (searchWord: string[]) => void;
  input: string;
  setInput: (input: string) => void;
  searchResults: string[];
  setSearchResults: (searchResults: string[]) => void;
  history: string;
  setHistory: (history: string) => void;
};

export default function MainComponent({
  open,
  input,
  setInput,
  setSearchWord,
  searchResults,
  setSearchResults,
  history,
  setHistory,
}: Props) {
  const [debouncedInput, setDebouncedInput] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  return (
    <div className={`${styles.maincomponent} ${!open && styles.blur}`}>
      <div className={styles.component}>
        <h1 className={styles.heading}>English API Dictionary</h1>
        <SearchBar input={input} setInput={setInput} />
      </div>
      <DictionaryData
        input={debouncedInput}
        setInput={setInput}
        setSearchWord={setSearchWord}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
}
