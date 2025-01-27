import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders/AdminOrders";
import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import Cart from "./pages/cart/Cart";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Order from "./pages/orders/Order";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";

function App() {
  console.log(process.env);
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product/details/:id' element={<ProductDetails />} />

          {/* cart */}
          <Route path='/cart' element={<Cart />} />

          {/* orders */}
          <Route path='/order' element={<Order />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* about */}
          <Route path='/about' element={<About />} />

          {/* Admin routes */}
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route
            path='/admin/product/edit/:id'
            element={<AdminProductEdit />}
          />
          <Route path='/admin/orders' element={<AdminOrders />} />

          {/* search */}
          <Route path='/search/:query' element={<Search />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;