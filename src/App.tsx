import "./App.css";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import DoctorsPage from "./pages/doctors";
import MedicinesPage from "./pages/medicines";
import CategoriesPage from "./pages/categories";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";
import RootLayout from "./components/layouts/root-layour";
import MedicinePage from "./pages/medicine";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="medicines" element={<MedicinesPage />} />
        <Route path="medicines/:id" element={<MedicinePage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="health-care" element={<DoctorsPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
