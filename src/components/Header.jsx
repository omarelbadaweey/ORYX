
import React, { useState } from "react";
// 1. استيراد الأيقونات من react-icons
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="fixed w-full shadow z-50 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 ">
            <div className="w-15 h-15 outline-2 outline-orange-500/80 bg-gradient-to-br from-emerald-400 to-orange-500 content-center rounded-lg">
              <img
                src="/icon.png"
                alt="ORYX TECH Logo"
                className="w-full h-full mx-auto rounded-lg"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Services" , "Projects" , "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-orange-600 hover:text-[#045647] font-bold px-3 py-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="tel:201092129293"
                  className="group relative px-5 py-2 hover:shadow-md shadow-[#001814] bg-[#045647] text-white font-bold rounded-full overflow-hidden transition-all"
                >
                  Let's Talk
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Mobile Button - React Icons */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-emerald-600 cursor-pointer p-2 text-3xl transition-transform duration-300 active:scale-90"
              >
                {/* تبديل الأيقونة مع حركة بسيطة */}
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content - تعديل السلاسة هنا */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-slate-100 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-5 pb-6 space-y-3 text-center border-y border-emerald-500/20">
            {["Home", "Services" , "Projects" , "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // يقفل القائمة لما تضغط على لينك
                className="text-gray-100 bg-[#045647] rounded-full block px-3 py-2 text-lg font-medium border-b border-white/5 hover:text-orange-300 transition-colors"
              >
                {item}
              </a>
            ))}
                            <a
                  href="tel:201092129293"
                  className="group w-full block relative px-5 py-2.5 hover:shadow-md shadow-[#001814] bg-[#045647] text-white font-bold rounded-full overflow-hidden transition-all"
                >
                  Let's Talk
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;