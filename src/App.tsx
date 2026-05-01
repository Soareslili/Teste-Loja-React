import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from "./components/Home/Categories";
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import Footer from "./pages/Footer";
import About from "./pages/About";
import { Products } from "./service/Products";  
import { getProducts } from "./service/productsService"; 
import type { Product } from "./types/product";
import CheckoutModal from "./components/Layout/CheckoutModal";
import CartSheet from "./components/Layout/CartSheet";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Produtos carregados:", data); 
        setProducts(data);
      })
      .finally(() => (false));
  }, []);


  const handleProductClick = (product: Product) => {
    console.log("Produto clicado:", product);
  };

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories />
               
              </>
            } />
            <Route path="/products" element={        
              <Products products={products} onProductClick={handleProductClick} showViewAll={true} />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={
              <>
              <Newsletter />
              <Contact />
              </>
            } 
            
              />
          </Routes>
        </main>
        <Footer />
         <CartSheet />       
      <CheckoutModal />   
      </div>
    </BrowserRouter>
  );
}

export default App;