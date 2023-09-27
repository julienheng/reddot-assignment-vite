/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar/SideBar";
import MainComponent from "./components/MainComponent/MainComponent";
import useSessionStorage from "../utils/useSessionStorage";
import NavBar from "./components/NavBar/NavBar";

const randomWords = [
  "camaraderie",
  "demagogue",
  "enervating",
  "intrepid",
  "rancorous",
];

function App() {
  const wod = randomWords[Math.floor(Math.random() * randomWords.length)];
  console.log(wod);

  const [searchWord, setSearchWord] = useSessionStorage("searchWord", []);
  const [savedResults, setSavedResults] = useSessionStorage("savedResults", []);
  const [input, setInput] = useState<string>("");
  const initialHistory = sessionStorage.getItem("history") || "";
  const [history, setHistory] = useState<string>(initialHistory);
  const [nav, setNav] = useState<boolean>(false);
  const [activeWord, setActiveWord] = useState<string>("");
  const [wordOfDay, setWordOfDay] = useState<any[]>([]);

  const handleClickWord = (word: string) => {
    setHistory(word);
    sessionStorage.setItem("history", word);
    setActiveWord(word);
    setNav(!nav);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${wod}`
        );

        if (response.status === 200) {
          const result = await response.json();
          console.log(result);
          setWordOfDay(result);
        } else {
          // Handle error here if the response status is not 200
        }
      } catch (error) {
        // Handle any other errors that may occur during the fetch
      }
    };

    fetchData();
  }, []);
  console.log(wordOfDay);
  console.log(savedResults)
  console.log(typeof wordOfDay);
  console.log(typeof savedResults)

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
        wordOfDay={wordOfDay}
      />
    </main>
  );
}

export default App;
