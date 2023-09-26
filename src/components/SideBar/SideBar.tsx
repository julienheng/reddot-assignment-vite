/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./sidebar.module.css";

type Props = {
  activeWord: string;
  searchWord: string[];
  handleClickWord: (word: string) => void;
};

export default function SideBar({
  activeWord,
  searchWord,
  handleClickWord,
}: Props) {
  return (
    <div className={styles.sidebar}>
      <div>
        <h2 className={styles.title}>Search History</h2>
        <div className={styles.content}>
          {searchWord.map((word: string, index: number) => (
            <p
              key={index}
              className={`${styles.word} ${
                activeWord === word ? styles.active : ""
              }`}
              onClick={() => handleClickWord(word)}
            >
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
