import { useState } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";
import useSessionStorage from "../utils/useSessionStorage";

function App() {
  const [searchWord, setSearchWord] = useSessionStorage("searchWord", []);
  const [savedResults, setSavedResults] = useSessionStorage("savedResults", []);
  const [input, setInput] = useState<string>("");
  const initialHistory = sessionStorage.getItem("history") || "";
  const [history, setHistory] = useState<string>(initialHistory);

  const handleClickWord = (word: string) => {
    console.log("Clicked word:", word);
    setHistory(word);
    sessionStorage.setItem("history", word);
  };

  console.log("history:", history);

  return (
    <main>
      <SideBar searchWord={searchWord} handleClickWord={handleClickWord} />
      <MainComponent
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        input={input}
        setInput={setInput}
        savedResults={savedResults}
        setSavedResults={setSavedResults}
        history={history}
        setHistory={setHistory}
      />
    </main>
  );
}

export default App;
