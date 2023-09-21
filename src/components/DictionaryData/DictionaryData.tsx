/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import styles from "./dictionarydata.module.css";

// COMPONENTS
import Definitions from "./Definitions";

type Props = {
  input: string;
  setInput: (input: string) => void;
};

export default function DictionaryData({ input, setInput }: Props) {
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
    }
  }, [input, setInput]);

  if (error) return <div className={styles.error}>{error}</div>;

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  console.log(data);

  return (
    <div className={styles.card}>
      {/* {data ? (
        <> */}
      <div className={styles.header}>
        <h2 className={styles.word}>{data[0].word}</h2>
        <div className={styles.phonetic}>{data[0].phonetic}</div>
      </div>
      <Definitions data={data} />
      {/* </>
      ) : (
        <div>No data available.</div>
      )} */}
    </div>
  );
}
