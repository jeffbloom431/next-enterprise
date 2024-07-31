import { Metadata } from 'next';
import { Button } from 'components/Button/Button';

export const metadata: Metadata = {
  title: 'Next.js Enterprise Boilerplate',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://next-enterprise.vercel.app/',
    images: [
      {
        width: 1200,
        height: 630,
        url: 'https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png',
      },
    ],
  },
};

export default function Web() {
  return (
    <>

        <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
                <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src="/assets/Logoblack.png" alt="Description" className="w-60 h-45" />
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="/services" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="/contact" className="text-blue-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                    </div>
                </div>
                </nav>
    
      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              CalShip Logistics
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              We are a leading fulfillment and logistics company specializing in comprehensive supply chain solutions. We cater to businesses of all sizes, offering a wide range of services designed to streamline operations, reduce costs, and enhance customer satisfaction.
            </p>
            <Button href="/contact" >
              Contact
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-12">
          <div className="flex justify-center mx-auto px-4 lg:px-6">
            <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-2 lg:px-6 ">
              <div className="order-1">
                <img src="/assets\warehouse-1.jpg" alt="Image 1" className=" w-full h-auto rounded-lg shadow-lg max-w-2xl" />
              </div>
              <div className=" order-2 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
                Our cutting-edge warehouse management systems (WMS) and transportation management systems (TMS) ensure operational efficiency and real-time visibility into your supply chain.
              </div>
              <div className="order-4 lg:order-3 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
                Whether you are a startup or a large enterprise, our scalable solutions can grow with your business needs.
              </div>
              <div className='order-3 lg:order-4'>
                <img src="/assets/docking-port.jpg" alt="Image 2" className="lg:order-4 w-full h-auto rounded-lg shadow-lg max-w-2xl" />
              </div>
              <div className='order-5'>
                <img src="/assets/bus-planning.jpg" alt="Image 2" className=" w-full h-auto rounded-lg shadow-lg max-w-2xl" />
              </div>
              <div className=" order-6 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
              Our experienced professionals are dedicated to providing exceptional service and support, ensuring that your logistics needs are met with precision.
              </div>
              <div className=" order-8 lg:order-7 sm:my-0 md:my-0 mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:text-2xl lg:mb-8 lg:text-3xl flex items-center justify-center">
              With a network of strategically located warehouses and partnerships with leading carriers, we offer global logistics solutions to reach your customers wherever they are.          
              </div>
              <div className='order-7'>
                <img src="/assets/warehouse-2.jpg" alt="Image 2" className="order-7 lg:order-8 w-full h-auto rounded-lg shadow-lg max-w-2xl" />
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
