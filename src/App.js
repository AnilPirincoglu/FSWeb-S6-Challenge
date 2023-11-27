import { useState, useEffect } from "react";

import Header from "./layouts/Header";
import ReactSideBar from "./layouts/ReactSideBar";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";



const App = () => {


  const [isOpen, setIsOpen] = useState(true);
  const [mainComponent, setMainComponent] = useState("welcome")

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [mainComponent]);

  return (
    <div className="App">
      <Header toggle={toggle} />
      <ReactSideBar open={isOpen} toggle={toggle} setMainComponent={setMainComponent} />
      <Main mainComponent={mainComponent} />
      <Footer />
    </div>
  );
}

export default App;
