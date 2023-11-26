import { useState, useEffect } from "react";

import Header from "./layouts/Header";
import ReactSideBar from "./layouts/ReactSideBar";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";



const App = () => {


  const [isOpen, setIsOpen] = useState(true);
  const [mainComponent, setMainComponent] = useState("welcome")

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [mainComponent]);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <ReactSideBar isOpen={isOpen} setIsOpen={setIsOpen} setMainComponent={setMainComponent} />
      <Main mainComponent={mainComponent} />
      <Footer />
    </div>
  );
}

export default App;
