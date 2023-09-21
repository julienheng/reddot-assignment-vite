/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import styles from "./dictionarydata.module.css";

// COMPONENTS
import Definitions from "./Definitions";

type Props = {
  input: string;
  setInput: (input: string) => void;
  setSearchHistory: (searchHistory: string[]) => void;
};

export default function DictionaryData({ input, setInput, setSearchHistory }: Props) {
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

      // Save search history to localStorage
      const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
      history.unshift(input); // Add to the beginning of the array
      localStorage.setItem("searchHistory", JSON.stringify(history));

      // Update searchHistory state
      setSearchHistory(history);
    }
  }, [input, setInput]);

  if (error) return <div className={styles.error}>{error}</div>;

  if (!data || data.length === 0) {
    return <div>What word are you looking for?</div>;
  }

  console.log(data);

  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.word}>{data[0].word}</h2>
        <div className={styles.phonetic}>{data[0].phonetic}</div>
      </div>
      <Definitions data={data} />
    </div>
  );
}
