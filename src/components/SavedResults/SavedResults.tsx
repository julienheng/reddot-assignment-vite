/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./saved-results.module.css";

type Props = {
  savedResults: any[];
  history: string;
};

export default function SavedResults({ savedResults, history }: Props) {
  
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

  const filtered = savedResults.find((wordData: any) =>
    wordData.some((item: any) => item.word === history)
  );

  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.word}>{filtered[0]?.word}</h2>
        <div className={styles.phonetic}>{filtered[0]?.phonetic}</div>
      </div>

      <h3>Definitions:</h3>
      <div>
        {filtered.map((item: any, index: number) => (
          <div key={index}>
            {item.meanings?.map((meaning: any, meaningIndex: number) => {
              const partOfSpeech = meaning.partOfSpeech;
              const cssClass = getPartOfSpeechClass(partOfSpeech);

              return (
                <div
                  className={`${styles.definitionwrapper} ${cssClass}`}
                  key={meaningIndex}
                >
                  <h4>{partOfSpeech}</h4>
                  <div className={styles.definition}>
                    <p>{meaning.definitions[0]?.definition}</p>
                    <p className={styles.example}>
                      {meaning.definitions[0]?.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
