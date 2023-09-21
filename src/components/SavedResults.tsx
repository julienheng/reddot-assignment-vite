/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./savedresults.module.css";

type Props = {
  results: any[];
};

export default function SavedResults({ results }: Props) {
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

  console.log(results);

  return (
    <div className={styles.card}>
    {results.map((wordData: any, wordIndex: number) => (
      <div key={wordIndex}>
        <div>
          <h2>{wordData[0]?.word}</h2>
          <div>{wordData[0]?.phonetic}</div>
        </div>

        <h3>Definitions:</h3>
        <div>
          {wordData.map((item: any, index: number) => (
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
    ))}
  </div>
  );
}
