import LifeCycle from "./pages/LifeCycle";
import { Route, Routes } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";

//
function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<CreateProduct />} />
          <Route path="product/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
      <LifeCycle />
    </>
  );
}

export default App;
