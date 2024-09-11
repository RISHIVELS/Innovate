import "./App.css";
import Navbar from "./component.jsx/navbar";
import Hero from "./component.jsx/hero";
import Analytics from "./component.jsx/analytics";
import Newsletter from "./component.jsx/newsletter";
import Cards from "./component.jsx/cards";
import Footer from "./component.jsx/footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
