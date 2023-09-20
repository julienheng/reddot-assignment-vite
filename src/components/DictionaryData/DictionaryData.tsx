/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import styles from "./dictionarydata.module.css";

// COMPONENTS
import Definitions from "./Definitions";

type Props = {
  input: string;
}

export default function DictionaryData({ input }: Props) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [input]);

  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.word}>{data[0].word}</h2>
        <div className={styles.phonetic}>{data[0].phonetic}</div>
      </div>
      <Definitions data={data} />
    </div>
  );
}
