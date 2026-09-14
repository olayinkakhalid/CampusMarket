import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationHistoryProvider } from "./context/NavigationHistory.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Pages/home.jsx";
import Browse from "./Pages/browse.jsx";
import Categories from "./Pages/categories.jsx";
import Sellitems from "./Pages/sellitems.jsx";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navigation />

      <NavigationHistoryProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellitems" element={<Sellitems />} />
        </Routes>
      </NavigationHistoryProvider>

      <Footer />

    </BrowserRouter>
  )
}

export default App