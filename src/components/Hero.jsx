import { Facebook, GithubIcon,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <section dir="rtl" id="home" className="relative min-h-screen bg-slate-50 text-black flex items-center pt-25 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
          {/* <h2 className="text-[#066050] font-semibold tracking-widest text-sm uppercase mb-4">
            Future-Ready Solutions
          </h2>

          <h1 className="text-4xl lg:text-6xl text-[#045647] font-extrabold leading-tight mb-6">
            Next-Gen Digital <br />
            <span className="bg-gradient-to-r from-[#045647] via-teal-500 to-orange-400 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
            At <span className="text-[#045647] font-bold">ORYX TECH</span>, we
            bridge the gap between vision and reality. From scalable E-commerce
            ecosystems to complex booking systems, we build high-performance web
            solutions powered by the latest React technologies.
          </p> */}

            <h2 className="text-[#066050] font-semibold tracking-widest text-sm uppercase mb-4">
            حلول جاهزة للمستقبل
          </h2>

          <h1 className="text-4xl lg:text-6xl text-[#045647] font-extrabold leading-tight mb-6">
            تجارب رقمية <br />
            <span className="bg-gradient-to-r from-[#045647] via-teal-500 to-orange-400 bg-clip-text text-transparent">
              من الجيل القادم
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-8">
            في <span className="text-[#045647] font-bold">أوريكس تيك (ORYX TECH)</span>، 
            نحن نسد الفجوة بين الرؤية والواقع. من أنظمة التجارة الإلكترونية القابلة للتوسع 
            إلى منصات الحجز المعقدة، نبني حلول ويب عالية الأداء مدعومة بأحدث التقنيات
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="group relative shadow-md shadow-[#045647] px-5 py-4 cursor-pointer bg-[#045647] text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105">
              استكشف مشاريعنا
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <div className="flex items-center gap-4 px-4">
              <a
                href="https://www.facebook.com/share/18HAF34Cri/"
                className="w-10 h-10 hover:scale-110 hover:shadow-md hover:shadow-blue-700 flex items-center justify-center rounded-full border-2 text-blue-500 border-blue-500 transition-all"
              >
                <Facebook className="fill-blue-500" />
              </a>
              <a
                href="https://github.com/omarelbadaweey"
                className="w-10 h-10 hover:scale-110 hover:shadow-md hover:shadow-black flex items-center justify-center rounded-full border-2 border-black transition-all"
              >
                <GithubIcon className="fill-black" />
              </a>
              <a
                href="https://wa.me/201092129293"
                className="w-10 h-10 hover:scale-110 hover:shadow-md hover:shadow-emerald-600 flex items-center justify-center rounded-full border-2  text-emerald-600 hover:border-emerald-600  transition-all"
              >
                <FaWhatsapp className="fill-emerald-600 text-2xl"/>
              </a>
            </div>
          </div>
        </div>

        {/* Visual Element (الصورة) */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-linear-to-br from-emerald-500/20 to-orange-600/50  rounded-2xl p-4">
            
            <img
              src="/hero.png"
              alt="Tech Setup"
              className="rounded-xl transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
