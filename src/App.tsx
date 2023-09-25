/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";
import useLocalStorage from "./../utils/useLocalStorage";

function App() {
  const [history, setHistory] = useState<string>("");
  const [searchWord, setSearchWord] = useLocalStorage("searchWord", []);
  const [savedResults, setSavedResults] = useLocalStorage("savedResults", []);
  const [input, setInput] = useState<string>("");

  const handleClickWord = (word: string) => {
    setHistory(word);
  };

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

// useEffect(() => {
//   const word = JSON.parse(sessionStorage.getItem("searchWord") || "[]");
//   setSearchWord(word);
// }, []);

// useEffect(() => {
//   const results = JSON.parse(sessionStorage.getItem("searchResults") || "[]");
//   setSearchResults(results);
// }, []);
