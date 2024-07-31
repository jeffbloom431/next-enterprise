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

      <main className="flex flex-grow flex-col justify-center items-center pt-40">
      <h2 className="mb-4 text-5xl font-extrabold leading-none tracking-tight dark:text-white text-center">
              Contact
            </h2>
        <section id="contact" className="bg-white dark:bg-gray-900 py-12 w-full">
          <div className="mx-auto max-w-screen-md px-4 lg:px-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-50 border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md bg-gray-50 border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md bg-gray-50 border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white p-3"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
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
