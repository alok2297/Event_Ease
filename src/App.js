import "./header.css";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/MainActivity/HeroSection";
import CitiesPopup from "./components/MainActivity/CitiesPopup";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { set } from "mongoose";

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handlePop = (e) => {
    console.log("Alok");
    setOpen(e);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CitiesPopup />
      </Modal>
      <Header OpenCityPop={handlePop} />
      <HeroSection />
    </div>
  );
}
export default App;
