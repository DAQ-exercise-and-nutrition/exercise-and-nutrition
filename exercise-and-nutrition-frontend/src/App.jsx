import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Foods from './pages/foods/Foods';
import NavBar from './components/navbar/NavBar';
import Exercises from './pages/exercises/Exercises';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/exercises" element={<Exercises/>}></Route>
          <Route path="/foods" element={<Foods/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
