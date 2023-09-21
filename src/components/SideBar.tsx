/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from "../components/sidebar.module.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  searchWord: string[];
  history: boolean;
  setHistory: (history: boolean) => void;
};

export default function SideBar({
  open,
  setOpen,
  searchWord,
  history,
  setHistory,
}: Props) {
  const handleClick = () => {
    setOpen(!open);
    setHistory(!history);
  };

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
            <p key={index} onClick={() => handleClick()}>
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
