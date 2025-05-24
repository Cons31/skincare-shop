import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "G2g",
    price: 150000,
    description: 'Glad2Glow Moisturizer Wajah Retinol Peach 30 g | Alfagift. Moisturizer dengan kandungan campuran Retinol & HPR yang bekerja secara bersinergi untuk membantu melawan tanda-tanda penuaan dini, merawat jerawat, melembutkan tekstur kulit yang tidak merata, membantu wajah lebih cerah, dan menyamarkan noda hitam pada kulit..' ,
    image: "/assets/g2g.jpg",
  },
  {
    id: 2,
    name: "MsGlow",
    price: 200000,
    description: 'MS GLOW Acne Daily BB Cream mengandung Centella Asiatica Extract, Salicylic Acid, German Chamomile Flower Extract, Licorice Extract, dan Rosemary Leaf Extract untuk membantu menyejukkan kulit yang berjerawat, melawan bakteri penyebab jerawat, dan mengurangi kemerahan pada kulit..',
    image: "/assets/ms.jpg",
  },
  {
    id: 3,
    name: " Skintific",
    price: 30000,
    description: 'Moisturizer yang menggabungkan 3 kandungan aktif Ceramide, Hyaluronic Acid, dan Centella Asiatica, untuk mengatasi permasalahan skin barrier yang rusak seperti jerawat, kemerahan, kulit bertekstur, dan juga kulit kering secara cepat namun tetap aman untuk skin barrier..',
    image: "/assets/ss.jpg",
  },
    {
    id: 4,
    name: "You Acne",
    price: 100000,
    description: 'YOU AcnePlus adalah rangkaian produk perawatan wajah yang diformulasikan khusus untuk mengatasi masalah jerawat. Produk-produk ini mengandung bahan-bahan aktif seperti Centella Asiatica, Niacinamide, dan Salicylic Acid yang membantu meredakan peradangan, mengontrol produksi minyak, dan menyamarkan bekas jerawat. .',
    image: "/assets/yy.jpg",
  },
    {
    id: 5,
    name: "Beauty In The Pot Brightening Serum",
    price: 300000,
    description: ' BEAUTY IN THE POT Skincare merupakan produk yang di produksi dengan teknologi termodern, bukan produk rumahan dan murahan seperti pada umumnya, sudah memiliki izin dari BPOM yang pastinya menjadikan produk ini berkualitas dan aman..',
    image: "/assets/bb.jpg",
  },
    {
    id: 6,
    name: "Toner Beauty Of Jeseon",
    price: 90000,
    description: ' Beauty of Joseon Ginseng Essence Water merupakan toner yang digunakan untuk mengatasi khususnya kulit yang bermasalah dengan kulit kendur dan noda kehitaman. .',
    image: "/assets/ttt.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Jual Beli Skincare </h1>
      <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Tutup Keranjang" : "Lihat Keranjang"}
      </button>
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <ProductList products={initialProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
