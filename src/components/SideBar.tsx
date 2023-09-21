/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from "../components/sidebar.module.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  searchWord: string[];
  handleClickWord: (word: string) => void;
};

export default function SideBar({
  open,
  setOpen,
  searchWord,
  handleClickWord
}: Props) {

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
      <BsArrowLeftCircle
        className={`${styles.arrow} ${open && styles.rotate}`}
        onClick={() => setOpen(!open)}
      />
      <div className={styles.content}>
        <h2>Search History</h2>
        <div>
          {searchWord.map((word: any, index: number) => (
            <p key={index} onClick={() => handleClickWord(word)}>
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
