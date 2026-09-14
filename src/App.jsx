import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { NavigationHistoryProvider } from "./Context/NavigationHistory.jsx";

import Home from "./pages/home.jsx";
import Browse from "./pages/browse.jsx";
import Categories from "./pages/categories.jsx";
import Sellitems from "./pages/sellitems.jsx";

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
        </Routes>

        <Footer />

      </NavigationHistoryProvider>
    </BrowserRouter>
  )
}

export default App