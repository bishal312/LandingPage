import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import LocalBusiness from "./components/LocalBusiness";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurClients/>
      <LocalBusiness/>
      <Footer/>
    </div>
  );
};

export default App;
