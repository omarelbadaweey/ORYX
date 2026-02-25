import React from "react";
import {
  Globe,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Code2,
  Smartphone,
  ArrowRight,
} from "lucide-react"; // مكتبة أيقونات سهلة وخفيفة

const services = [
  {
    title: "بورتفوليو شركات",
    desc: "تصميم مواقع تعريفية احترافية تعكس هوية شركتك وتجذب عملائك.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "متاجر إلكترونية",
    desc: "أنظمة بيع متكاملة، سهلة الاستخدام، وبوابات دفع آمنة.",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    title: "سيستم حجز عيادات",
    desc: "إدارة كاملة للمواعيد والمرضى بتقارير دقيقة وسهولة في الحجز.",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "مشاريع تخرج",
    desc: "تنفيذ أفكار مشاريع التخرج بأعلى جودة برمجية وشرح كامل للكود.",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "تطبيقات ويب مخصصة",
    desc: "بناء أنظمة سحابية (Web Apps) معقدة تلبي احتياجات بيزنس خاص.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "تطبيقات موبايل",
    desc: "تطبيقات Native و Cross-platform تعمل بكفاءة على iOS و Android.",
    icon: <Smartphone className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 pt-20 px-6 bg-[#f8fafc] font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header القسم */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#045647] mb-4">
            خدماتنا البرمجية
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحول أفكارك إلى واقع رقمي ملموس باستخدام أحدث التقنيات العالمية.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-[#045647]/25 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-slate-100 text-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#045647] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* زر التواصل السفلي */}
        <div className="mt-10 text-center">
          <a href="https://wa.me/201092129293" className="bg-[#045647] group hover:shadow-md hover:shadow-[#045647] relative overflow-hidden hover:bg-[#034237] text-white px-5 py-3 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all transform shadow-lg shadow-[#045647]/20">
            ابدأ مشروعك الآن
            <ArrowRight className="w-5 h-5 rotate-180" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
