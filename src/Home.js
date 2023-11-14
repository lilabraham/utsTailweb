import { useState } from "react";
import Footer from "./Footer";
import Navbars from "./Navbars";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/Features" },
  { name: "Product", href: "/Product" },
  { name: "Product List", href: "/ProductList" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cardData = [
    {
      title: "Mardi Mercredi",
      imgSrc:
        "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Upgrade your style with this comfortable and stylish T-shirt.",
    },
    {
      title: "Urban Exchange",
      imgSrc:
        "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The Classic Black T-Shirt, a timeless piece of clothing.",
    },
    {
      title: "LIFEWORK",
      imgSrc:
        "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "With great courage and style.",
    },
  ];

  return (
    <div className="bg-white flex flex-col h-screen justify-between">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbars />
      </header>
      <div
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/full-shot-woman-looking-clothes_23-2150082870.jpg?w=1800&t=st=1699951451~exp=1699952051~hmac=a19b4324a789ab3889cb316d4d890aba7739aa2e2e7b17abb82ba56429112f8d")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="/Features" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-style: italic tracking-tight text-white sm:text-6xl">
              Masterpiece Simple and Made better
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Explore our collection, which is constantly updated in line with
              the latest fashion trends. From classic styles to the latest
              options, we offer a wide range of choices for all tastes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              background: "linear-gradient(to top right, #ffffff, #ffffff)",
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8 mx-auto max-w-full pb-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`max-w-sm bg-green border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
              index > 0 ? "ml-4" : ""
            } transform transition-transform hover:scale-105`}
          >
            <a href="#">
              <div
                className="group relative"
                style={{ overflow: "hidden", borderRadius: "0.375rem" }}
              >
                <img
                  className="rounded-t-lg transition-transform transform-gpu duration-300 group-hover:scale-105"
                  src={card.imgSrc}
                  alt={`Deskripsi gambar ${index + 1}`}
                />
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat bg-center "
                  style={{ backgroundImage: `url(${card.imgSrc})` }}
                />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span>{card.description}</span>
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer className="App-footer h-8 mt-auto block">
        <Footer />
      </footer>
    </div>
  );
}
