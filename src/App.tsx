import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/footer/Footer';
import Login from './component/login/Login';
import Register from './component/register/Register';
import './App.css'
import MessageList from './component/message/MessageList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <Navbar />
      <Routes>
            <Route path={'/'} element={<HomePage />} ></Route>
            <Route path={'/homePage'} element={<HomePage />} ></Route>
            <Route path={'/login'} element={<Login />} ></Route>
            <Route path={'/register'} element={<Register />} ></Route>
            <Route path={'/messages'} element={<MessageList />} ></Route>
          </Routes>
          <Footer/>
          </BrowserRouter>
      </div>
  );
}
export default App;
