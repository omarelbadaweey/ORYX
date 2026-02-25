
import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Briefcase, ChevronDown } from 'lucide-react';

const ProfessionalContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'متجر إلكتروني',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const WHATSAPP_NUMBER = "201092129293"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic الـ Validation بتاعنا
    if (!formData.name || !formData.email.includes('@') || formData.message.length < 10) {
      setErrors({ general: "تأكد من ملء البيانات بشكل صحيح" });
      return;
    }
    
    const text = `*طلب مشروع جديد*%0A*الاسم:* ${formData.name}%0A*الخدمة:* ${formData.projectType}%0A*الرسالة:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 overflow-x-hidden px-6 bg-[#f8fafc] font-sans" dir="rtl" id='contact'>
      <div className="max-w-4xl mx-auto">
        
        {/* العناوين - شغل مبرمجين رايق */}
        <div className="mb-12 relative text-center">
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2 block"></span>
          <h2 className="text-5xl font-black text-[#045647] tracking-tighter">
            {/* لنحول الكود إلى <span className="text-orange-500">واقع</span> */}
            تواصل معنا 
          </h2>
          <div className="absolute -top-4 -right-8 w-24 h-24 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(4,86,71,0.05)] relative overflow-hidden">
          
          {/* زخرفة خفيفة في الخلفية تدل على البرمجة */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* حقل الاسم */}
              <div className="group space-y-3">
                <label className="flex items-center gap-2 text-[#045647] font-bold text-sm">
                  <User size={16} className="text-orange-500" /> الاسم 
                </label>
                <input 
                  type="text"
                  placeholder="كيف نناديك؟"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[#045647] outline-none transition-all focus:border-orange-500 focus:bg-white focus:shadow-[0_0_20px_rgba(249,115,22,0.1)] placeholder:text-slate-300"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                                {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}

              </div>

              {/* حقل الإيميل */}
              <div className="group space-y-3">
                <label className="flex items-center gap-2 text-[#045647] font-bold text-sm">
                  <Mail size={16} className="text-orange-500" /> بريدك الإلكتروني
                </label>
                <input 
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[#045647] outline-none transition-all focus:border-orange-500 focus:bg-white focus:shadow-[0_0_20px_rgba(249,115,22,0.1)] placeholder:text-slate-300"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
              </div>

            </div>

            {/* نوع المشروع - Dropdown شيك */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[#045647] font-bold text-sm">
                <Briefcase size={16} className="text-orange-500" /> نوع المشروع
              </label>
              <div className="relative">
                <select 
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[#045647] outline-none transition-all appearance-none cursor-pointer focus:border-orange-500"
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option>متجر إلكتروني احترافي</option>
                  <option>بورتفوليو شركات</option>
                  <option>أنظمة حجز عيادات</option>
                  <option>تطبيقات ويب مخصصة</option>
                  <option>مشروع تخرج (VIP)</option>
                </select>
                <ChevronDown className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* تفاصيل المشروع */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-[#045647] font-bold text-sm">
                <MessageSquare size={16} className="text-orange-500" /> اشرح لنا رؤيتك
              </label>
              <textarea 
                rows="5"
                placeholder="ابدأ بكتابة تفاصيل مشروعك هنا..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-6 py-4 text-[#045647] outline-none transition-all focus:border-orange-500 focus:bg-white resize-none placeholder:text-slate-300"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {/* زر الإرسال - "The Statement Piece" */}
            <button 
              type="submit"
              className="relative w-full cursor-pointer overflow-hidden group bg-[#045647] text-white py-5 rounded-2xl font-black text-lg transition-all hover:shadow-[0_20px_40px_rgba(4,86,71,0.2)] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-orange-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-3 ">
                إرسال الطلب على واتساب
                <Send size={20} className="rotate-180 transition-transform group-hover:-translate-x-2" />
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalContact;