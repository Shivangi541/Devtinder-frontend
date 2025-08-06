import NavBar from "./NavBar"; // ES Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/"> {/* all routing starts from here*/ }
        <Routes>
          
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
