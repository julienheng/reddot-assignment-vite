import { useState } from "react";
import "./App.css";

// COMPONENTS
import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";

function App() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <main>
      <SideBar open={open} setOpen={setOpen} />
      <MainComponent open={open} />
    </main>
  );
}

export default App;
