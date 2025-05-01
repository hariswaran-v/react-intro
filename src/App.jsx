import React from "react";
import TheNavbar from "./TheNavbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <TheNavbar />
      <div className="bg-white max-w-xl mx-auto border rounded p-10 m-10">
        <HomePage />
        <ContactPage />
        <AboutPage />
      </div>
    </div>
  );
}

export default App;
