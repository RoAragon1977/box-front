import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./page/Navbar";
import HomePage from "./page/HomePage";
import ProductDetailPage from "./page/ProductDetailPage";
import AdministrationPage from "./page/AdministrationPage";
import RegistrationPage from "./page/RegistrationPage";
import PasswordRecoveryPage from "./page/PasswordRecoveryPage";
import AboutPage from "./page/AboutPage";
import FavoritesPage from "./page/FavoritesPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accesorio/:id" element={<ProductDetailPage />} />
        <Route path="/administracion" element={<AdministrationPage />} />
        <Route path="/registro" element={<RegistrationPage />} />
        <Route path="/recContraseña" element={<PasswordRecoveryPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
