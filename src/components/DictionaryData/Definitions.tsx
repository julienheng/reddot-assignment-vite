/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./definitons.module.css";

type Props = {
  data: any;
};

export default function Definitions({ data }: Props) {
  return (
    <div>
      <h3>Definitions:</h3>
      <div>
        {data.map((item: any, index: number) => (
          <div key={index}>
            {item.meanings.map((meaning: any, meaningIndex: number) => (
              <div
                className={`${styles.definition} ${
                  meaning.partOfSpeech === "noun"
                    ? styles.noun
                    : meaning.partOfSpeech === "verb"
                    ? styles.verb
                    : styles.interjection
                }`}
                key={meaningIndex}
              >
                <h4>{meaning.partOfSpeech}</h4>
                <div>
                  <p>{meaning.definitions[0].definition}</p>
                  <p className={styles.example}>
                    {meaning.definitions[0].example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
