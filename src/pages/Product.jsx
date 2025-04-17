import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState();

  const naviget = useNavigate();

  console.log(productData);

  const product = useParams();
  console.log(product);

  const pro = async () => {
    try {
      const proData = await axios.get(
        `https://dummyjson.com/products/${product.id}`
      );
      setProductData(proData.data);
    } catch (error) {
      console.log(2, error);
    }
  };
  useEffect(() => {
    console.log(111);

    pro();
  }, []);
  return (
    <div className="bg-green-200 h-[100vh] pt-10 ">
      <div className="flex flex-col md:flex-row items-start gap-6 p-4 bg-cyan-900 rounded-2xl shadow-md max-w-3xl mx-auto ">
        <img
          src={productData.thumbnail}
          alt={productData.title}
          className="w-40 h-40 object-contain rounded-lg border bg-amber-200"
        />

        <div className="flex-1 space-y-2">
          <h2 className="text-xl text-white font-semibold">{productData.title}</h2>
          <p className="text-sm text-gray-50">
            {productData.brand} • {productData.category}
          </p>
          <p className="text-green-200 text-sm">{productData.description}</p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-green-600 font-bold">
              ${productData.price}
            </span>
            <span className="text-yellow-500">⭐ {productData.rating}</span>
            <span
              className={
                productData.availabilityStatus === "Low Stock"
                  ? "text-red-500 font-semibold"
                  : "text-green-500"
              }
            >
              {productData.availabilityStatus}
            </span>
          </div>
          <div className="text-xs text-gray-500">
            <p className="text-violet-400">
              <strong className="text-white">SKU:</strong> {productData.sku}
            </p>
            <p className="text-violet-400">
              <strong className="text-white">Weight:</strong> {productData.weight} oz
            </p>
            <p className="text-violet-400">
              <strong className="text-white">Return:</strong> {productData.returnPolicy}
            </p>
            <p className="text-violet-400">
              <strong className="text-white">Warranty:</strong> {productData.warrantyInformation}
            </p>
          </div>
          <div className="flex justify-between">
            <button className="mt-2 text-black px-4 py-2 bg-white rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button
              className="mt-2 px-4 py-2 bg-white text-black rounded-xl hover:bg-blue-700 transition"
              onClick={() => naviget("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
