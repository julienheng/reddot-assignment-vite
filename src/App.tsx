/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const word = JSON.parse(localStorage.getItem("searchWord") || "[]");
    setSearchWord(word);
  }, []);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("searchResults") || "[]");
    setSearchResults(results);
  }, []);

  return (
    <main>
      <SideBar
        open={open}
        setOpen={setOpen}
        searchWord={searchWord}
        setInput={setInput}
      />
      <MainComponent
        open={open}
        setSearchWord={setSearchWord}
        input={input}
        setInput={setInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
    </main>
  );
}

export default App;
