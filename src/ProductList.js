import React, { useState } from "react";
import Navbars from "./Navbars";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups-03_126278-124.jpg?w=1060&t=st=1699954231~exp=1699954831~hmac=c1518c074de726b9b851c5c5f0bec7d6c66acc17e9369dab80e154d11fefde2d",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Casual Shirt",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-psd/mens-cvc-crew-mockup-05_126278-112.jpg?w=1060&t=st=1699954273~exp=1699954873~hmac=b8e073d2b461f73ef036027f9c77d90d17ddebcaa732441d99f7872c87127cb4",
    imageAlt: "Front of men's Casual Shirt in blue.",
    price: "$45",
    color: "Blue",
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups-04_126278-125.jpg?w=1060&t=st=1699954210~exp=1699954810~hmac=c4a6379e59b97def369a919dfd47994fe5bc6073bd3918d8613a9480b1eae82c",
    imageAlt: "Front of men's Slim Fit Jeans in black.",
    price: "$55",
    color: "Black",
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-psd/mens-ultra-cotton-tee-mockup_126278-149.jpg?w=1060&t=st=1699954184~exp=1699954784~hmac=a6f922d6b81c2d0a3c46a12a889c6ef18b86765ec745e4e33a5e718f87c2e641",
    imageAlt: "Front of men's Slim Fit Jeans in black.",
    price: "$55",
    color: "Purple",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    href: "#",
    imageSrc:
      "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-122.jpg?w=1060&t=st=1699954143~exp=1699954743~hmac=6f1484a46d9c7a67c16e5f3a403071c1106790a26238df8fc609db2f4b3eaeb6",
    imageAlt: "Front of men's Slim Fit Jeans in black.",
    price: "$55",
    color: "Purple",
  },
];

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuy = (product) => {
    // Implement logic untuk menangani pembelian, misalnya, mengirim data pembelian ke backend atau menavigasi ke halaman pembayaran.
    console.log(`Anda telah membeli ${product.name} seharga ${product.price}.`);
  };

  const handleDetails = (product) => {
    // Implement logic untuk menampilkan detail produk, misalnya, menavigasi ke halaman detail produk.
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbars />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <div className="mt-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleDetails(product)}
                >
                  Details
                </button>
                <button
                  className="ml-4 text-green-600 hover:underline"
                  onClick={() => handleBuy(product)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedProduct.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {selectedProduct.color}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {selectedProduct.price}
                </p>
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="mt-2 h-40 w-full object-cover object-center"
                />
              </div>
              <div className="bg-gray-50 p-4">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
                <button
                  className="ml-4 text-green-600 hover:underline"
                  onClick={() => handleBuy(selectedProduct)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="h-8 block">
        <Footer />
      </footer>
    </div>
  );
}
