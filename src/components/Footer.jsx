import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة السكرول لإظهار وإخفاء الزرار
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // وظيفة السكرول للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#045647] text-white pt-20 pb-10 px-6 overflow-hidden relative" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* الجزء العلوي: التقسيمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. عن الشركة */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter italic">ORYX<span className="text-orange-500">.</span></h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              نحن مؤسسة تقنية متخصصة في ابتكار الحلول البرمجية وتصميم تجارب مستخدم استثنائية. نحول الأكواد إلى قصص نجاح.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. روابط سريعة */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-r-4 border-orange-500 pr-3">روابط سريعة</h4>
            <ul className="space-y-4 text-slate-300">
                <li >
                  <a href="#home" className="hover:text-orange-500 flex items-center gap-2 group transition-colors">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    الرئيسية
                  </a>
                </li>
                <li >
                  <a href="#services" className="hover:text-orange-500 flex items-center gap-2 group transition-colors">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    خدماتنا
                  </a>
                </li>
                <li >
                  <a href="#projects" className="hover:text-orange-500 flex items-center gap-2 group transition-colors">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    أعمالنا
                  </a>
                </li>
             
            </ul>
          </div>

          {/* 3. خدماتنا */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-r-4 border-orange-500 pr-3">خدماتنا</h4>
            <ul className="space-y-4 text-slate-300">
              {['تطوير المواقع', 'تطبيقات الموبايل', 'المتاجر الإلكترونية'].map((service) => (
                <li key={service} className="hover:text-orange-500 cursor-pointer transition-colors">{service}</li>
              ))}
            </ul>
          </div>

          {/* 4. تواصل معنا */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-r-4 border-orange-500 pr-3">معلومات التواصل</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>المنصورة، مصر</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span dir="ltr">01092129293</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>hello@oryx-tech.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* الجزء السفلي: الحقوق */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} ORYX TECH. جميع الحقوق محفوظة.</p>
        </div>

      </div>

      {/* زر الـ Scroll To Top الذكي */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-orange-500 text-white rounded-2xl shadow-2xl transition-all duration-500 z-50 hover:bg-orange-600 hover:-translate-y-2 active:scale-90
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
        `}
      >
        <ChevronUp size={24} strokeWidth={3} />
      </button>

      {/* لمسة ديكور خلفية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    </footer>
  );
};

export default Footer;