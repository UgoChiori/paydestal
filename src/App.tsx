import {useState, useEffect} from 'react';
import LandingPage from "./LandingPage";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation";
import Getstarted from "./layout/Getstarted";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/errorboundary/ErrorFallBack";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

 

  return (
    <div id="main" style={{ position: "relative" }}>
      {loading && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
        
        >
          <img src="images/loadingspinner.gif" alt="loading" />
        </div>
      )}
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
      
        <NavigationBar />
        <LandingPage />
        <Getstarted />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
