import LoginForm from './components/LoginForm';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
