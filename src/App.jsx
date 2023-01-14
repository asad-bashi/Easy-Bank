import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="relative min-h-screen ">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
      <div className="h-screen"></div>
    </div>
  );
}
export default App;
