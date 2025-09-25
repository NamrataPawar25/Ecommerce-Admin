import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import NavbarTop from "./components/NavbarTop";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import CreateCategory from "./pages/CreateCategory";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import CreateBrand from "./pages/CreateBrand";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <NavbarTop />
          <div className="d-flex">
            {/* Sidebar */}
            <Navbar />

            {/* Main content area */}
            <div className="flex-grow-1 p-4">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  path="/register"
                  element={<Registration setIsRegister={setIsRegister} />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/category-list" element={<CategoryList />} />
                <Route path="/create-category" element={<CreateCategory />} />
                <Route path="/brand-list" element={<BrandList />} />
                <Route path="/create-brand" element={<CreateBrand />} />
              </Routes>
            </div>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
