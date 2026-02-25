import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";
import Payment from "./Pages/Payment";
import Summary from "./Pages/Summary";
import ThankYou from "./Pages/Thankyou";


function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/thankyou" element={<ThankYou />} />
       
      </Routes>

  );
}

export default App;