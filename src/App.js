import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Header from './components/header/header';
import Products from './components/products/products';
import Pagination from "./components/pagination/pagination";
import Search from "./components/search/search";

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get("https://dummyjson.com/products")
      console.log(result.data.products)
      setProduct(result.data.products)
      setLoading(false)
    }
    getProduct();
  }, [])

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);
  const nextPage = (num) => {
    setCurrentPage(num)
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
          <Search
            input={input}
            setInput={setInput}
          />
        </div>
      <div className="products">
        <Products
          input={input}
          product={currentProducts}
          loading={loading}
        />
      </div>
      <div>
        <Pagination
          productPerPage={productPerPage}
          totalProduct={product.length}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
}

export default App;
