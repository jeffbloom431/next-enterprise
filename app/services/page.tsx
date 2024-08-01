"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, Card } from "components/ui/apple-cards-carousel";

export default function Web() {
  const images = [
    "/assets/warehouse-1.jpg",
    "/assets/warehouse-1.jpg",
    "/assets/warehouse-1.jpg",
    "/assets/warehouse-1.jpg",
    "/assets/warehouse-1.jpg",
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/assets/Logoblack.png" alt="Description" className="w-60 h-45" />
            </div>
            <div className="flex space-x-0.5">
              <a href="/" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/services" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/contact" className="text-blue-400 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-40">
        <section className="bg-white dark:bg-gray-900 ">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
            <div className="mx-auto place-self-center">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Services
              </h1>
            </div>
          </div>
        </section>
        <Carousel items={cards} />
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 py-6 mt-auto">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p className="mb-2">&copy; {new Date().getFullYear()} CalShip Logistics. All rights reserved.</p>
          <p>
            Email: <a href="mailto:info@ewfulfillment.com" className="hover:underline">info@calshiplogistics.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

const Order = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Efficient Packing, Custom Solutions, and Real-Time Tracking.
              </span>
              <br></br>
              - Pick and Pack Services
              <br></br>
              - Custom Packaging
              <br></br>
              - Inventory Management
              <br></br>
              - Real-Time Order Tracking
            </p>
            <Image
              src="/assets/packing-1.jpg"
              alt=" mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-4 rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};

const Warehousing = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Climate-Controlled Storage, Cross-Docking, and Efficient Distribution.
              </span>
              <br></br>
              - Secure Storage Solutions
              <br></br>
              - Climate-Controlled Facilities
              <br></br>
              - Cross-Docking
              <br></br>
              - Distribution Centers
            </p>
            <Image
              src="/assets/warehouse-1.jpg"
              alt=" mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-4 rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};

const Shipping = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Seamless Shipping, Freight Management, and Last Mile Solutions.
              </span>
              <br></br>
              - Domestic and International Shipping
              <br></br>
              - Same-Day and Next-Day Delivery Options
              <br></br>
              - Freight Management
              <br></br>
              - Last Mile Delivery</p>
            <Image
              src="/assets/shiping-boxes.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-4 rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};

const Services = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Quality Control, Custom Labels, Detailed Reports, and Dedicated Support.
              </span>
              <br></br>
              - Quality Control Inspections
              <br></br>
              - Labeling and Barcoding
              <br></br>
              - Customized Reporting
              <br></br>
              - Customer Support Services
              </p>
            <Image
              src="/assets/worker-1.jpeg"
              alt=" mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-4 rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};
const Ecommerce = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Streamlined Integrations, Simplified Returns, Tailored Fulfillment, and Expert Kitting.
              </span>
              <br></br>
              - Integration with Major E-commerce Platforms
              <br></br>    
              - Return Management
              <br></br>
              - Subscription Box Fulfillment
              <br></br>
              - Kitting and Assembly
              </p>
            <Image
              src="/assets/ecommerce-2.png"
              alt=" mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-4 rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};
 
const data = [
  {
    category: "Order Fulfillment",
    title: "Streamline Your Shipping.",
    src: "/assets/packing-5.jpg",
    content: <Order />,
  },
  {
    category: "Warehousing",
    title: "Smart and Secure Storage.",
    src: "/assets/warehouse-3.jpg",
    content: <Warehousing />,
  },
  {
    category: "Shipping and delivery",
    title: "Fast, Reliable, Worldwide.",
    src: "/assets/packages-1.jpg",
    content: <Shipping />,
  },
 
  {
    category: "Value-Added Services",
    title: "Enhancing Your Experience.",
    src: "/assets/person-tablet-1.png",
    content: <Services />,
  },
  {
    category: "E-commerce Solutions",
    title: "Elevate Your E-Commerce.",
    src: "/assets/ecommerce-1.png",
    content: <Ecommerce />,
  },
];