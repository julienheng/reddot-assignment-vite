import styles from "./searchbar.module.css";
import { CiSearch } from "react-icons/ci";

type Props = {
  input: string;
  setInput: (input: string) => void;
};

export default function InputBar({ input, setInput }: Props) {

  return (
    <div>
      <h1 className={styles.heading}>English API Dictionary</h1>

      <div className={styles.wrapper}>
        <CiSearch className={styles.icon} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ENTER YOUR SEARCH WORD ..."
          className={styles.input}
        />
      </div>
    </div>
  );
}
