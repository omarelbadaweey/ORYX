const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "MedicFlow System",
      category: "Clinic Management",
      desc: "سيستم متكامل لإدارة العيادات وحجز المواعيد إلكترونياً.",
      size: "md:col-span-2", // كارد عريض
      img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800",
      accent: "border-emerald-500/20"
    },
    {
      id: 2,
      title: "Oryx Shop",
      category: "E-Commerce",
      desc: "متجر سريع جداً مع بوابات دفع عالمية.",
      size: "md:col-span-1", // كارد صغير
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      accent: "border-orange-500/20"
    },
    {
      id: 3,
      title: "PowerHouse Gym",
      category: "Fitness App",
      desc: "تطبيق متابعة التمارين والمشتركين للجيمات الاحترافية.",
      size: "md:col-span-1",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
      accent: "border-blue-500/20"
    },
    {
      id: 4,
      title: "Custom CRM",
      category: "Internal Tech",
      desc: "لوحة تحكم ذكية لإدارة بيانات الشركات الضخمة.",
      size: "md:col-span-2",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      accent: "border-purple-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h3 className="text-4xl md:text-5xl font-black text-[#045647]">
            مشاريع <span className="text-gray-800 underline decoration-orange-500">نفخر بها</span>
          </h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myProjects.map((proj) => (
            <div 
              key={proj.id} 
              className={`${proj.size} group relative overflow-hidden rounded-[2.5rem] bg-emerald-600 border border-white/5 hover:border-white/20 transition-all duration-500`}
            >
              {/* Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end min-h-[350px]">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 px-3 py-1 bg-orange-500/10 rounded-full w-fit backdrop-blur-md">
                  {proj.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {proj.title}
                </h4>
                <p className="text-gray-400 text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {proj.desc}
                </p>
                
                {/* View Project Button */}
                <div className="flex items-center gap-2 text-white font-semibold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span>Explore Project</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <svg className="w-4 h-4 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Projects