import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTask } from "./Store";

export const Homes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();

  // get single product
  const product = data.find((item) => item.id === Number(id));

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState(product.thumbnail);

  const addToCart = () => {
    dispatch(
      addTask({
        id: product.id,
        title: product.title,
        image: mainImg,
        price: product.price * qty,
        quantity: qty,
      })
    );
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-400 text-white px-4 py-2 rounded ml-4 mt-4"
      >
        ← Back
      </button>

      {/* AMAZON LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

        {/* LEFT: IMAGE GALLERY */}
        <div>
          <img
            src={mainImg}
            className="w-full h-[400px] object-contain bg-white p-4 rounded"
          />

          <div className="flex gap-2 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImg(img)}
                className="w-16 h-16 object-contain border cursor-pointer hover:border-orange-500"
              />
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="text-white">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-300 mt-2">{product.description}</p>

          <div className="text-3xl text-orange-400 mt-4">
            ₹{product.price}
          </div>

          <p className="text-sm mt-1 text-gray-300">
            Inclusive of all taxes
          </p>

          {/* Quantity */}
          <select
            onChange={(e) => setQty(Number(e.target.value))}
            className="mt-4 p-2 rounded bg-gray-700"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                Quantity: {i + 1}
              </option>
            ))}
          </select>

          {/* ADD TO CART */}
          <button
            onClick={addToCart}
            className="block w-full bg-orange-500 mt-6 py-3 rounded text-black font-bold"
          >
            Add to Cart
          </button>

          {/* TRUST INFO */}
          <div className="mt-6 bg-gray-800 p-4 rounded">
            <p>✔ Free Delivery</p>
            <p>✔ 10 Days Return</p>
            <p>✔ Amazon Delivered</p>
            <p>✔ Secure Transaction</p>
          </div>
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 bg-green-600 px-6 py-3 rounded-b-xl text-white"
          >
            🛒 Item added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
