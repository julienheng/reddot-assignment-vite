/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "./wordofday.module.css";

type Props = {
  wordOfDay: object[];
};

export default function WordOfDay({ wordOfDay }: Props) {
  // Function to generate CSS class based on the part of speech
  const getPartOfSpeechClass = (partOfSpeech: string) => {
    switch (partOfSpeech) {
      case "noun":
        return styles.noun;
      case "verb":
        return styles.verb;
      case "adjective":
        return styles.adjective;
      default:
        return styles.interjection;
    }
  };

  const word = wordOfDay.map((item: any) => item);
  if (!wordOfDay || wordOfDay.length === 0) {
    return null; // Return null if wordOfDay is empty or undefined
  }

  const date = new Date();

  return (
    <>
      <div className={styles.heading}>
        <h1>Word of the Day</h1>
        <p className={styles.date}>
          {date.toLocaleString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className={styles.card}>
        <div>
          <h2 className={styles.word}>{word[0].word}</h2>
          <div className={styles.phonetic}>{word[0].phonetic}</div>
        </div>
        <h3>Definitions:</h3>
        <div>
          {word.map((item: any, index: number) => (
            <div key={index}>
              {item.meanings.map((meaning: any, meaningIndex: number) => {
                const partOfSpeech = meaning.partOfSpeech;
                const cssClass = getPartOfSpeechClass(partOfSpeech);

                return (
                  <div
                    className={`${styles.definitionwrapper} ${cssClass}`}
                    key={meaningIndex}
                  >
                    <h4>{partOfSpeech}</h4>
                    <div className={styles.definition}>
                      <p>{meaning.definitions[0].definition}</p>
                      <p className={styles.example}>
                        {meaning.definitions[0].example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
