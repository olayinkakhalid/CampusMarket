import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from '../src/components/Navigation.jsx';
import ScrollToTop from '../src/components/ScrollToTop.jsx';
import Footer from "../src/components/Footer.jsx";
import Home from "../src/Pages/home.jsx";
import Browse from "../src/Pages/browse.jsx";
import Categories from "../src/Pages/categories.jsx";
import Sellitems from "../src/Pages/sellitems.jsx";
import { NavigationHistoryProvider } from "../src/context/NavigationHistory.jsx";

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