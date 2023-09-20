import styles from "./maincomponent.module.css";
import { useState, useEffect } from "react";

//COMPONENTS
import SearchBar from "./SearchBar";
import DictionaryData from "./DictionaryData/DictionaryData";

type Props = {
  open: boolean;
};

export default function MainComponent({ open }: Props) {
  
  const [input, setInput] = useState<string>("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  return (
    <div className={`${styles.maincomponent} ${!open && styles.blur}`}>
      <div className={styles.component}>
        <SearchBar input={input} setInput={setInput} />
        <DictionaryData input={debouncedInput} />
      </div>
    </div>
  );
}
