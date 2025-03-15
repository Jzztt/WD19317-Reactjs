import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Product from "./pages/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
