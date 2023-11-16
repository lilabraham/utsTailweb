import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Footer from "./Footer";
import Navbars from "./Navbars";

const features = [
  {
    name: "Push to deploy.",
    description:
      "We are committed to environmental sustainability. Discover eco-friendly options in our collection to support a sustainable lifestyle.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fast and Secure Delivery.",
    description:
      "Enjoy fast and secure delivery to your door. We work with trusted logistics partners to ensure products arrive in perfect condition.",
    icon: LockClosedIcon,
  },
  {
    name: "Friendly Customer Service.",
    description:
      "Our customer service team is ready to assist you at any time. Whether it's a question or a favor, we're here to help.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-gray-200 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-40 h-full flex flex-col min-h-screen justify-between">
      <Navbars />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Withstands any weather
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The ideal hiking T-shirt should be made of quick-drying,
                breathable, and odor-resistant materials. Ergonomic design, UV
                protection, light color, lightness, and ease of packing are also
                important. In essence, the T-shirt should provide comfort,
                protection, and be practical when hiking in nature.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1455044372794-d981761b5bc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-120 md:-ml-4 lg:-ml-0"
            width={800}
          />
        </div>
      </div>
      <footer className="App-footer" class="h-10 block">
        <Footer />
      </footer>
    </div>
  );
}
