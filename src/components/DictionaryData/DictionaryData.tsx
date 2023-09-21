/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import styles from "./dictionarydata.module.css";

// COMPONENTS
import Definitions from "./Definitions";
import SavedResults from "../SavedResults";

type Props = {
  input: string;
  setInput: (input: string) => void;
  setSearchWord: (searchWord: string[]) => void;
  searchResults: string[];
  setSearchResults: (searchResults: string[]) => void;
};

export default function DictionaryData({
  input,
  setInput,
  setSearchWord,
  searchResults,
  setSearchResults,
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
        );

        // CHECK FOR RESPONSE STATUS CODE
        if (response.status === 200) {
          const result = await response.json();
          setData(result);
          setInput("");
        } else {
          setError(
            "Sorry, we couldn't find definitions for the word you were looking for. Please refresh and try again."
          );
        }
      } catch (error) {
        setError(
          "Sorry, we couldn't find definitions for the word you were looking for. Please refresh and try again."
        );
        console.error("Error fetching data:", error);
      }
    };

    if (input) {
      fetchData();

      // Save search word to localStorage
      const word = JSON.parse(localStorage.getItem("searchWord") || "[]");
      word.push(input);
      localStorage.setItem("searchWord", JSON.stringify(word));
      setSearchWord(word);
    }
  }, [input, setInput, setSearchWord]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Update searchResults when data is available
      const results = JSON.parse(localStorage.getItem("searchResults") || "[]");
      results.unshift(data);
      localStorage.setItem("searchResults", JSON.stringify(results));
      console.log(results);
      setSearchResults(results);
    }
  }, [data, setSearchResults]);

  if (error) return <div className={styles.error}>{error}</div>;

  if (!data || data.length === 0) {
    return <div>What word are you looking for?</div>;
  }

  return (
    <>
      <div className={styles.card}>
        <div>
          <h2 className={styles.word}>{data[0].word}</h2>
          <div className={styles.phonetic}>{data[0].phonetic}</div>
        </div>
        <Definitions data={data} />
      </div>
      <SavedResults results={searchResults} />
    </>
  );
}
