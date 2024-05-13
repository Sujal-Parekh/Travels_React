import logo from './logo.svg';
import './App.css';
// import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Packages from './component/Packages';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Destination from './component/Destination';
import Tour from './component/Tour';
import Booking from './component/Booking';
import Gallery from './component/Gallery';
import Guides from './component/Guides';
import Testimonial from './component/Testimonial';
function App() {
  return (
    <>
    {/* <Header/> */}
    
    {/* <Home/> */}
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/packages" element={<Packages/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/destination" element={<Destination/>}></Route>
    <Route path="/tour" element={<Tour/>}></Route>
    <Route path="/booking" element={<Booking/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/guides" element={<Guides/>}></Route>
    <Route path="/testmonial" element={<Testimonial/>}></Route>

   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
