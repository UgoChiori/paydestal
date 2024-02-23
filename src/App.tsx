import LandingPage from "./LandingPage";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation";
import Getstarted from "./layout/Getstarted";

function App() {
  return (
    <div style={{position: "relative"}}>
      <NavigationBar />
      <LandingPage />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;
