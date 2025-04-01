import { useState } from "react";
import LifeCycle from "./pages/LifeCycle";

//
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<CreateProduct />} />
          <Route path="product/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes> */}
      <LifeCycle />
    </>
  );
}

export default App;
