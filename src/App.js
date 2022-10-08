import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Addproduct from "./Components/Addproduct";
import UpdateProducts from "./Components/UpdateProduct";
import Profile from "./Components/Profile";
import Nav from "./Navbar/Nav";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import PrivalteComponent from "./Components/PrivalteComponent";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivalteComponent />} > 
          <Route path="/" element={<Products />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/update" element={<UpdateProducts />} />
          <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
