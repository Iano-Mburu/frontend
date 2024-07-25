import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./components/navigation/Nav"
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import ResetPasswordPageConfirm from "./pages/ResetPasswordPageConfirm";
import ActivatePage from "./pages/ActivatePage";
import NotFoundPage from "./pages/NotFoundPage";

/// PRODUCTS

import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";
import UpdateProduct from "./components/UpdateProduct";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/showproducts" element={<ShowProducts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App