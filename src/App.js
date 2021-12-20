import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import CouresDetails from './components/Courses/CouresDetails';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path='/course-details' element={<CouresDetails />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
