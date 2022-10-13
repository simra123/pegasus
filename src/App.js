import './assets/scss/main.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './header-footer';
import { Home, About, Shop, Singleproduct , Faq, Contact } from './pages/js/index';
import { Loginform, Createnewpass, Forgotpassword, Registerform, Verifyemail, Sellerform } from './forms';
import ScrollToTop from './pages/js/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/createnewpass" element={<Createnewpass />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/registerform" element={<Registerform />} />
        <Route path="/verifyemail" element={<Verifyemail />} />
        <Route path="/sellerform" element={<Sellerform />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;