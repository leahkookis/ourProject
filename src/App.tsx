

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import HomePage from './component/HomePage/HomePage';
import Register from './component/register/Register';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path={'/'} element={<HomePage/>} ></Route> 
      <Route path={'/homePage'} element={<HomePage/>} ></Route>
      <Route path={'/login'} element={<Login/>} ></Route>
      <Route path={'/register'} element={<Register/>} ></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
