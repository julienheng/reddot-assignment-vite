import styles from "./searchbar.module.css";
import { CiSearch } from "react-icons/ci";

type Props = {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function InputBar({ input, setInput, handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <CiSearch className={styles.icon} />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ENTER YOUR SEARCH WORD ..."
        className={styles.input}
      />
    </form>
  );
}
