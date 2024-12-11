import "./App.css";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import CategoriesPage from "./pages/categories";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";
import RootLayout from "./components/layouts/root-layour";
import MedicinesPage from "./pages/medicines";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="medicines" element={<MedicinesPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="search/:keyword" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
