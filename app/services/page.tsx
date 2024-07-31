import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CalShip Logistics',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://next-enterprise.vercel.app/',
    images: [
      {
        width: 1200,
        height: 630,
        url: '/assets/calship-logo.png',
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
              <div className="flex space-x-0.5">
                  <a href="/" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="/services" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Services</a>
                  <a href="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="/contact" className="text-blue-400 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
              </div>
          </div>
          </nav>

      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Services
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-12">
          <div className="flex justify-center mx-auto px-4 lg:px-6">
            <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-2 lg:px-6 ">
            
                <div className="flex items-center">
                    <div className="w-1.5 h-48 md:h-64 lg:h-96 bg-gray-300 dark:bg-gray-700 mx-4"></div>
                    <p className="text-gray-500 dark:text-gray-300">
                        <span className="text-gray-700 text-3xl md:text-4xl ">Order Fulfillment</span> 
                        <br></br>
                        <span className=" text-xl md:text-2xl lg:3xl">- Pick and Pack Services</span>
                        <br></br>
                        <span className=" text-xl md:text-2xl lg:3xl">- Custom Packaging </span>
                        <br></br>
                        <span className=" text-xl md:text-2xl lg:3xl">- Inventory Management </span>
                        <br></br>
                        <span className=" text-xl md:text-2xl lg:3xl">- Real-Time Order Tracking</span>
                    </p>
                </div>

              <div>
                <img src="/assets/packing-1.jpg" alt="Image 1" className=" w-full h-auto rounded-lg shadow-lg max-w-xl" />
              </div>
              
              <div className="flex items-center">
                <div className="w-1.5 h-48 md:h-64 lg:h-96 bg-gray-600 dark:bg-gray-700 mx-4"></div>
                <p className="text-gray-500 dark:text-gray-300">
                    <span className="text-gray-700 text-3xl md:text-4xl ">Warehousing</span> 
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Secure Storage Solutions</span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Climate-Controlled Facilities </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Cross-Docking </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Distribution Centers</span>
                </p>
            </div>
              
            <div>
                <img src="/assets/warehouse-3.jpg" alt="Image 2" className=" w-full h-auto rounded-lg shadow-lg max-w-xl" />
            </div>

            <div className="flex items-center">
                <div className="w-1.5 h-48 md:h-64 lg:h-96 bg-gray-300 dark:bg-gray-700 mx-4"></div>
                <p className="text-gray-500 dark:text-gray-300">
                    <span className="text-gray-700 text-3xl md:text-4xl ">Shipping and Delivery</span> 
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Domestic and International Shipping </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Same-Day and Next-Day Delivery Options </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Freight Management </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Last Mile Delivery</span>
                </p>
            </div>

              <div >
                <img src="/assets/packages-1.jpg" alt="Image 2" className=" w-full h-auto rounded-lg shadow-lg max-w-xl" />
              </div>
            
              <div className="flex items-center">
                <div className="w-1.5 h-48 md:h-64 lg:h-96 bg-gray-600 dark:bg-gray-700 mx-4"></div>
                <p className="text-gray-500 dark:text-gray-300">
                    <span className="text-gray-700 text-3xl md:text-4xl ">Value-Added Services</span> 
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Quality Control Inspections</span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">-  Labeling and Barcoding </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Customized Reporting </span>
                    <br></br>
                    <span className=" text-xl md:text-2xl lg:3xl">- Customer Support Services </span>
                </p>
            </div>

              <div className='order-7'>
                <img src="/assets/person-tablet.jpg" alt="Image 2" className="order-7 lg:order-8 w-full h-auto rounded-lg shadow-lg max-w-xl" />
              </div>

          </div>
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
