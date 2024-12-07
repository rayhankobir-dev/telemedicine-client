import "./App.css";
import MainLayout from "./components/layouts/main-layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
