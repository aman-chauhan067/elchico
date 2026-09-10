import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { OurStory } from './pages/OurStory';
import { TakeAway } from './pages/TakeAway';
import { ElChicoRestaurant } from './pages/ElChicoRestaurant';
import { TheBakingCo } from './pages/TheBakingCo';
import { VeggieVeg } from './pages/VeggieVeg';
import { Blog } from './pages/Blog';
import { Gallery } from './pages/Gallery';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin';
import ScrollToTop from './components/utils/ScrollToTop';

import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/take-away" element={<TakeAway />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/the-baking-co" element={<TheBakingCo />} />
          <Route path="/veggie-veg" element={<VeggieVeg />} />
          <Route path="/elchico-restaurant" element={<ElChicoRestaurant />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
