import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      className="fixed inset-x-0 top-0 z-50 w-full max-w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        
        {/* Logo */}
        <div className="min-w-0 flex-shrink-0">
          <h1 className="text-xl font-bold text-blue-900 sm:text-2xl">
            XAMY
          </h1>

          <p className="text-[10px] font-medium tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-widest">
            INTERNATIONAL SCHOOL
          </p>
        </div>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-7">
          <a
            href="#home"
            className="whitespace-nowrap text-sm font-medium text-blue-900 transition hover:text-yellow-500 xl:text-base"
          >
            Home
          </a>

          <a
            href="#about"
            className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-yellow-500 xl:text-base"
          >
            About
          </a>

          <a
            href="#academics"
            className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-yellow-500 xl:text-base"
          >
            Academics
          </a>

          <a
            href="#admissions"
            className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-yellow-500 xl:text-base"
          >
            Admissions
          </a>

          <a
            href="#school-life"
            className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-yellow-500 xl:text-base"
          >
            School Life
          </a>

          <a
            href="#contact"
            className="whitespace-nowrap text-sm font-medium text-gray-700 transition hover:text-yellow-500 xl:text-base"
          >
            Contact
          </a>
        </div>

        {/* Mobile / Small Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-blue-900 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-5 shadow-lg sm:px-6 lg:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-blue-900 transition hover:bg-gray-50"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              About
            </a>

            <a
              href="#academics"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Academics
            </a>

            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Admissions
            </a>

            <a
              href="#school-life"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              School Life
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;