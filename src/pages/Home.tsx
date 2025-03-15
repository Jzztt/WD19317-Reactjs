// Component là 1 function
// Props là truyền dữ liệu từ cha xuống con

import Product from "../components/Product";
import Title from "../components/Title";

// viết 1 component Product là con của component Home
// Hãy truyền dữ liệu name và price từ cha(Home) xuống con(Product)
const Home = () => {
  // dữ liệu
  const title = "Home";
  const name = "Iphone";
  const price = 16000;
  return (
    <>
      <Title name={title} />
      <Product name={name} price={price} />
    </>
  );
};

export default Home;
