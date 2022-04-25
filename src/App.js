import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage2 from './components/LoginPage2';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage2 />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
