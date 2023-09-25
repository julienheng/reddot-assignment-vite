/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../components/sidebar.module.css";

type Props = {
  searchWord: string[];
  handleClickWord: (word: string) => void;
};

export default function SideBar({
  searchWord,
  handleClickWord,
}: Props) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <h2>Search History</h2>
        <div className="">
          {searchWord.map((word: any, index: number) => (
            <p key={index} className={styles.word} onClick={() => handleClickWord(word)}>
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
{/* <BsArrowLeftCircle
  className={`${styles.arrow} ${open && styles.rotate}`}
  onClick={() => setOpen(!open)}
/> */}
