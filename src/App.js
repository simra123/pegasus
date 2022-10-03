import './assets/scss/main.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './header-footer';
import { Home, About, Shop, Faq, Contact } from './pages';
import { Loginform, Createnewpass, Forgotpassword, Registerform, Verifyemail, Sellerform } from './forms';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
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