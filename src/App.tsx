/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";

function App() {
  const [open, setOpen] = useState<boolean>(true);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setSearchHistory(history);
  }, []);

  return (
    <main>
      <SideBar
        open={open}
        setOpen={setOpen}
        searchHistory={searchHistory}
        setInput={setInput}
      />
      <MainComponent
        open={open}
        setSearchHistory={setSearchHistory}
        input={input}
        setInput={setInput}
      />
    </main>
  );
}

export default App;
