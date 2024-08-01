"use client";
import React from "react";
import { cn } from "lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

import reactElementToJSXString from "react-element-to-jsx-string";
//import { toast, Toaster } from "sonner";
import { ButtonsCard } from "components/ui/tailwindcss-buttons";
import { Metadata } from 'next';
import { Button } from 'components/Button/Button';
import Link from 'next/link'
import Image from "next/image";
import { TypewriterEffectSmooth } from "components/ui/typewriter-effect";
import { twMerge } from "tailwind-merge";

export default function Web() {
  const words = [
    {
      text: "Better",

    },
    {
      text: "solutions",
    },
    {
      text: "built",
    },

    {
      text: "for",

    },
    {
      text: "you.",
      className: "text-blue-500 dark:text-blue-500",

    },
  ];
  return (
    <>
      
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

    <div className="p-10">

      
    </div>
      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              CalShip Logistics
              <TypewriterEffectSmooth className="flex items-center justify-center text-4xl md:text-5xl xl:text-6xl" words={words} />
            </h1>
            
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              We are a leading fulfillment and logistics company specializing in comprehensive supply chain solutions. We cater to businesses of all sizes, offering a wide range of services designed to streamline operations, reduce costs, and enhance customer satisfaction.
            </p>
            <Link href="/contact" >
              <button className="inline-flex h-12 animate-shimmer text-lg w-36 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact
            </button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-white dark:bg-gray-900 py-12">
  <div className="flex justify-center mx-auto px-4 lg:px-6">
    <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-2 lg:px-6">
      <div className="order-1">
        <Image src="/assets/warehouse-1.jpg" alt="Image 1" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg max-w-2xl transition-opacity opacity-0 duration-[-2s]" onLoadingComplete={(image)=>image.classList.remove("opacity-0")}/>
        
      </div>
      <div className="order-2 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
        <div className="mt-0">
          Our  <span className="text-blue-500 dark:text-blue-400 font-normal">cutting-edge</span> warehouse management systems (WMS) and <span>transportation management systems (TMS)</span> ensure operational <span className="text-blue-500 dark:text-blue-400 font-normal">efficiency</span> and real-time <span className="text-blue-500 dark:text-blue-400 font-normal">visibility</span> into your supply chain.
        </div>
        </div>              

        <div className="order-4 lg:order-3 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
        <div className="mt-0">
          With a network of <span className="text-blue-500 dark:text-blue-400 font-normal">strategically</span> located warehouses and partnerships with <span className="text-blue-500 dark:text-blue-400 font-normal">leading</span> carriers, we offer <span className="text-blue-500 dark:text-blue-400 font-normal">global</span> logistics solutions to reach your customers wherever they are.
          
        </div>
        </div>
        <div className='order-3 lg:order-4'>
          <Globe />
        </div>

        <div className='order-5'>
                <Image src="/assets/bus-planning.jpg" alt="Image 1" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg max-w-2xl transition-opacity opacity-0 duration-[-2s]" onLoadingComplete={(image)=>image.classList.remove("opacity-0")}/>
              </div>

        <div className="order-6 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
        <div className="mt-0">
        Our  <span className="text-blue-500 dark:text-blue-400 font-normal">experienced </span> professionals are dedicated to providing <span className="text-blue-500 dark:text-blue-400 font-normal">exceptional</span> service and support, ensuring that your logistics needs are met with <span className="text-blue-500 dark:text-blue-400 font-normal">precision.</span>
        </div>
        </div>
        

        <div className="order-7 lg:order-6 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
        <div className="mt-0">
        Whether you are a startup or a large enterprise, our <span className="text-blue-500 dark:text-blue-400 font-normal">scalable</span> solutions can <span className="text-blue-500 dark:text-blue-400 font-normal">grow</span> with your business needs.
        </div>
        </div>
              <div className='order-6 lg:order-7'>
                <Image src="/assets/warehouse-2.jpg" alt="Image 1" width={600} height={400} className="w-full h-auto rounded-lg shadow-lg max-w-2xl transition-opacity opacity-0 duration-[-2s]" onLoadingComplete={(image)=>image.classList.remove("opacity-0")}/>

              </div>

          </div>
        </div>

      </section>

      <section id="contact" className="bg-zinc-100 dark:bg-gray-900 py-12">
        <div className="mx-auto max-w-screen-md px-4 lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight dark:text-white text-center">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>

          </form>
        </div>
      </section>

      <footer className="bg-gray-800 dark:bg-gray-900 py-6">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p className="mb-2">&copy; {new Date().getFullYear()} CalShip Logistics. All rights reserved.</p>
          <p>
            Email: <a href="mailto:info@ewfulfillment.com" className="hover:underline">info@calshiplogistics.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    let phi = 0;
 
    if (!canvasRef.current) return;
 
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [.1, .8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });
 
    return () => {
      globe.destroy();
    };
  }, []);
 
  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};