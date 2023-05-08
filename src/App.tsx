

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import HomePage from './component/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Login/>} ></Route> 
      <Route path={'/userHomePage'} element={<HomePage/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
