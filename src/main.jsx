import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Molecules/Gnb/Header.jsx";
import Navbar from "./components/Templates/Gnb/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Navbar />
    <App />
  </StrictMode>
);
