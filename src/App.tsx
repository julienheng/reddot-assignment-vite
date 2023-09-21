/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [history, setHistory] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const word = JSON.parse(sessionStorage.getItem("searchWord") || "[]");
    setSearchWord(word);
  }, []);

  useEffect(() => {
    const results = JSON.parse(sessionStorage.getItem("searchResults") || "[]");
    setSearchResults(results);
  }, []);

  const handleClickWord = (word: string) => {
    setOpen(!open);
    setHistory(word);
  };

  return (
    <main>
      <SideBar
        open={open}
        setOpen={setOpen}
        searchWord={searchWord}
        handleClickWord={handleClickWord}
      />
      <MainComponent
        open={open}
        setSearchWord={setSearchWord}
        input={input}
        setInput={setInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        history={history}
        setHistory={setHistory}
      />
    </main>
  );
}

export default App;
