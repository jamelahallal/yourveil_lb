import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fabrics from "./components/Fabrics";
import FabricDetail from "./components/FabricDetail";
import Footer from "./components/Footer";
import "./styles/globals.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedFabric, setSelectedFabric] = useState(null);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Hero setActivePage={setActivePage} />;
      case "about":
        return <About />;
      case "fabrics":
        return (
          <Fabrics
            setActivePage={setActivePage}
            setSelectedFabric={setSelectedFabric}
          />
        );
      case "fabric-detail":
        return (
          <FabricDetail
            fabric={selectedFabric}
            setActivePage={setActivePage}
          />
        );
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">{renderPage()}</main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
