import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Services from "./pages/Service";
import { AuthProvider } from "./context/AuthContext";
import { CustomToastProvider } from "./context/ToastContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Dashboard pages
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import MyClaims from "./pages/MyClaims";
import NewClaim from "./pages/NewClaim";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <AuthProvider>
      <CustomToastProvider>
        <Router>
          <Navbar />
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/services" element={<Services />} />

              {/* Dashboard Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="policies" element={<Policies />} />
                  <Route path="claims" element={<MyClaims />} />
                  <Route path="claims/new" element={<NewClaim />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </CustomToastProvider>
    </AuthProvider>
  );
};

export default App;
