import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import CreateCategory from "./pages/CreateCategory";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import CreateBrand from "./pages/CreateBrand";

// Layout wrapper for dashboard pages
function DashboardLayout({ children }) {
  return (
    <>
      <NavbarTop />
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4">{children}</div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Dashboard routes inside layout */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/category-list"
            element={
              <DashboardLayout>
                <CategoryList />
              </DashboardLayout>
            }
          />
          <Route
            path="/create-category"
            element={
              <DashboardLayout>
                <CreateCategory />
              </DashboardLayout>
            }
          />
          <Route
            path="/brand-list"
            element={
              <DashboardLayout>
                <BrandList />
              </DashboardLayout>
            }
          />
          <Route
            path="/create-brand"
            element={
              <DashboardLayout>
                <CreateBrand />
              </DashboardLayout>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
