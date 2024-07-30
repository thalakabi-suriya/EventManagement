import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/Login';  // Import the new SignIn component
import Register from './pages/Register';
import Footer from './components/Footer';
import EventCreation from './pages/EventCreation';
import GlobalStyle from './GlobalStyles';
import { UserProvider, useUser } from './UserContext';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Booking from './pages/Booking';
import AdminManageEvents from './pages/AdminManageEvents';
import AdminManageUsers from './pages/AdminManageUsers';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { user } = useUser();
  return user && user.email === 'admin@gmail.com' ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <UserProvider>
        <GlobalStyle />
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<SignIn />} /> {/* Use SignIn component */}
              <Route path="/register" element={<Register />} />
              <Route path="/event-creation" element={<EventCreation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
              <Route path="/admin/manage-events" element={<AdminRoute><AdminManageEvents /></AdminRoute>} />
              <Route path="/admin/manage-users" element={<AdminRoute><AdminManageUsers /></AdminRoute>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
