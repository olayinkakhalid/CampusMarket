import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationHistoryProvider } from "./context/NavigationHistory.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import Categories from "./pages/categories.jsx";
import Sellitems from "./pages/sellitems.jsx";

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