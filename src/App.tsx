import LandingPage from "./LandingPage";
import Footer from "./components/Footer";
import NavigationBar from "./components/Navigation";
import Getstarted from "./layout/Getstarted";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/errorboundary/ErrorFallBack";

function App() {
  return (
    <div style={{ position: "relative" }}>
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
