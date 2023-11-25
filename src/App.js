import { useState } from "react";
import Header from "./layouts/Header";
import ReactSideBar from "./layouts/ReactSideBar";



const App = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Header toggle={() => toggle()} />
      <ReactSideBar isOpen={isOpen} toggle={() => toggle()} />
    </div>
  );
}

export default App;
