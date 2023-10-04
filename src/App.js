import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      toast.success("DarkMode Enabled", {
        className: 'toastify',
        position: "top-center",
        autoClose: 1000,
        theme: "light",
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      toast.info("DarkMode Disabled", {
        className: 'toastify',
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <Navbar title="MKL Testutils" mode={mode} modeToggler={toggle} />
      <div className="container">
        <ToastContainer
          className="user-select-none"
          pauseOnFocusLoss={false}
        />
          <Routes>
            <Route path="/" element={<Home mode={mode} />}/>
            <Route path="/about" element={<About mode={mode} />}/>           
          </Routes>
      </div>
    </>
  );
}

export default App;
