
"use client";
import React from "react";
import { BackgroundGradient } from "components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export default function Web() {
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

      <main className="flex flex-grow flex-col justify-center items-center">

            <div className="max-w-xl">
      <BackgroundGradient className="rounded-[22px] max-w-xl p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
              <h2 className="mb-4 text-5xl font-extrabold leading-none tracking-tight dark:text-white text-center">
              About Us
            </h2>
 
        <p className="text-base font-light sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 p-4">
        CalShip is a leading fulfillment and logistics company dedicated to providing comprehensive supply chain solutions. Founded on the principles of efficiency, reliability, and innovation, we cater to businesses of all sizes with a mission to streamline operations and enhance customer satisfaction. Leveraging state-of-the-art technology and a team of dedicated professionals, we ensure that your products reach their destination on time and in perfect condition.
        </p>

      </BackgroundGradient>
    </div>
      </main>


      <footer className="bg-gray-800 dark:bg-gray-900 py-6">
        <div className="mx-auto my-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p className="mb-2">&copy; {new Date().getFullYear()} CalShip Logistics. All rights reserved.</p>
          <p>
 
            Email: <a href="mailto:info@ewfulfillment.com" className="hover:underline">info@calshiplogistics.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
