import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
