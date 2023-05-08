import Footer from '../footer/Footer';
import Menu from '../menu/Menu';
import Register from '../register/Register';
import './Layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';

function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

        <aside>
          <Menu />
        </aside>

        <main>
          <Routes>
            <Route path={'/'} element={<HomePage />} ></Route>
            <Route path={'/homePage'} element={<HomePage />} ></Route>
            <Route path={'/login'} element={<Login />} ></Route>
            <Route path={'/register'} element={<Register />} ></Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div >);
}

export default Layout;
