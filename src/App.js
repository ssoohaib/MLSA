import './css/App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Main from './Main';
import About from "./About"
import Events from "./Events"
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import Team from './Team';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <Navbar />
              <Main />
              <About />
              <div className="under-line"><div></div></div>
              <Events />
              <div className="under-line"><div></div></div>
              <Team />
              <div className="under-line"><div></div></div>
              <Footer />

            </div>
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
