import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { NavigationHistoryProvider } from "./Context/NavigationHistory.jsx";

import Home from "./pages/home.jsx";
import Browse from "./pages/browse.jsx";
import Categories from "./pages/categories.jsx";
import Sellitems from "./pages/sellitems.jsx";
import ProductDetails from './pages/productdetails.jsx'
import Favorites from './pages/favorites.jsx'
import Messages from "../src/Pages/messages.jsx";
import Notifications from "../src/Pages/notifications.jsx";
import Signin from "../src/Pages/signin.jsx";
import Signup from "../src/Pages/signup.jsx";



function App() {
  return (
    <BrowserRouter>

      <NavigationHistoryProvider>

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellitems" element={<Sellitems />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />

      </NavigationHistoryProvider>
    </BrowserRouter>
  )
}

export default App