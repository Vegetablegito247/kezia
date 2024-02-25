import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
