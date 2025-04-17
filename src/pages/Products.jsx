import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const navlink = useNavigate();

  console.log(products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const token = sessionStorage.getItem("token");

  return (
    <>
      <div className="w-full bg-blue-950 py-2 px-5 flex justify-between">
      <h1 className="text-white font-bold mb-4 ">jio mart</h1>
        {token ? (
          <button
            className="bg-white px-5 py-1 rounded font-bold text-cyan-800"
            onClick={() => navlink("/user")}
          >
            Profile
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <NavLink to={`/product/${product.id}`}>
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow hover:shadow-xl transition bg-blue-200"
              >
                <img
                  src={product.images}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600 mb-2">
                  {product.description.slice(0, 100)}...
                </p>
                <p className="text-sm">
                  Brand: <span className="italic">{product.brand}</span>
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === idx + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
