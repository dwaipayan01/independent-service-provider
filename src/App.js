
import './App.css';
import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import CheckOut from './pages/CheckOut/CheckOut';
import RequiredAuth from './pages/RequiredAuth/RequiredAuth';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/checkout/:checkoutId" element={<RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
