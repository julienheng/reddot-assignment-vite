import { BsArrowLeftCircle } from "react-icons/bs";
import styles from "../components/sidebar.module.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  searchHistory: string[];
  setInput: (input: string) => void;
};

export default function SideBar({
  open,
  setOpen,
  searchHistory,
  setInput,
}: Props) {
  const handleClick = (word: string) => {
    setInput(word);
    setOpen(!open);
  };

  return (
    <div
      className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}
    >
      <BsArrowLeftCircle
        className={`${styles.arrow} ${open && styles.rotate}`}
        onClick={() => setOpen(!open)}
      />
      <div className={styles.content}>
        <h2>Search History</h2>
        <div>
          {searchHistory.map((word, index) => (
            <p key={index} onClick={() => handleClick(word)}>
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
