import React from "react";
import Banner, {LandingSection, TeamSection} from "./Banner";
import "../app.css";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Banner />
      <LandingSection />
      <LandingSection direction="reverse"/>
      <LandingSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;
