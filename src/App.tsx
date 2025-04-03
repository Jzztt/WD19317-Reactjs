import LifeCycle from "./pages/LifeCycle";
import { Route, Routes } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import LearnReducer from "./pages/LearnReducer";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
          <Route path="learn-reducer" element={<LearnReducer/>}/>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      {/* <LifeCycle /> */}
    </>
  );
}

export default App;
