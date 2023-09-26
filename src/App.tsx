import { useState } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar/SideBar";
import MainComponent from "./components/MainComponent/MainComponent";
import useSessionStorage from "../utils/useSessionStorage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [searchWord, setSearchWord] = useSessionStorage("searchWord", []);
  const [savedResults, setSavedResults] = useSessionStorage("savedResults", []);
  const [input, setInput] = useState<string>("");
  const initialHistory = sessionStorage.getItem("history") || "";
  const [history, setHistory] = useState<string>(initialHistory);
  const [nav, setNav] = useState<boolean>(false);
  const [activeWord, setActiveWord] = useState<string>("");

  const handleClickWord = (word: string) => {
    setHistory(word);
    sessionStorage.setItem("history", word);
    setActiveWord(word);
  };

  return (
    <main>
      {/* SIDE BAR FOR DESKTOP */}
      <SideBar
        searchWord={searchWord}
        handleClickWord={handleClickWord}
        activeWord={activeWord}
      />

      {/*  SIDE BAR FOR MOBILE */}
      <NavBar
        searchWord={searchWord}
        handleClickWord={handleClickWord}
        nav={nav}
        setNav={setNav}
        activeWord={activeWord}
      />

      {/* MAIN COMPONENT */}
      <MainComponent
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        input={input}
        setInput={setInput}
        savedResults={savedResults}
        setSavedResults={setSavedResults}
        history={history}
        setHistory={setHistory}
        nav={nav}
      />
    </main>
  );
}

export default App;
