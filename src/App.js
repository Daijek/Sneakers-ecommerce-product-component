import Navbar from "./components/Navbar";
import Product from "./components/Product";
import product1 from "./images/image-product-1.jpg";
import product1Thumbnail from "./images/image-product-1-thumbnail.jpg";
import product2 from "./images/image-product-2.jpg";
import product2Thumbnail from "./images/image-product-2-thumbnail.jpg";
import product3 from "./images/image-product-3.jpg";
import product3Thumbnail from "./images/image-product-3-thumbnail.jpg";
import product4 from "./images/image-product-4.jpg";
import product4Thumbnail from "./images/image-product-4-thumbnail.jpg";
import { useState } from "react";

function App() {
  const productImages = [product1, product2, product3, product4];
  const [thumbnail, setThumbnail] = useState(product1);

  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
