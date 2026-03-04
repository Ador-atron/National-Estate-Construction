import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Uganda's Premier Developers
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                Building Structures. <br />
                <span className="text-primary">Creating Legacy.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Premium construction and estate development solutions engineered
                for durability, value, and long-term impact in the heart of
                Kampala.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  Request a Consultation{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary px-8 py-4 rounded-xl font-bold transition-all"
                >
                  View Our Projects
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">15+</span>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">200+</span>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Projects Completed
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">98%</span>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
                <img
                  alt="Construction Site"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEE-mNrlFwT71_NHDSnoS-rv3KXd-0Dsu04_YCO0-vICslHg_izjNPwBL-3hX_WQXw2PmDqvzSElHKJOgoMxZZ35qhB4gjuzAUcUaPm6DA7KbPs0gcqHbjcHUISIpChbWPlka5KBp89E6Qx72KUy0nCHY7wQ5G4p5l-9PbgiGsw1mY8eqT9Ns2udJ-s2K3Miu5TND1Xsi__IvMIWwFp8GosbHILs2rLGpJKTbZgHmI124t8W35ry1fycl2t4TTqB4FAJQWoPXBPNI"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Headquarters
                    </p>
                    <p className="text-sm font-semibold">
                      Plot 1, Nyonyi Gardens Rd, Upper Kololo Terrace, Kampala
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="bg-primary h-64 rounded-2xl flex items-center justify-center p-8 text-white">
                <p className="text-xl font-bold leading-tight italic">
                  "We don't just build houses, we construct the future of urban
                  living."
                </p>
              </div>
              <div className="bg-slate-200 dark:bg-slate-800 h-64 rounded-2xl overflow-hidden">
                <img
                  alt="Architectural Detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA71Ku8LnMjfB-0dYdM5ACYN0sqliwmnDD3UMy3rCXM0iPOo6z5dAoPGz6N14xxEJ8VHiWc66LJCjHgDu_DKw7eFJh0WFls5d953jfHuLg_ugC_io1aXszblRJASP6l03FiFie80fCiUnp9SZBYwrzUXyTyyapSTVVwku0grIeE3y2lhdI0Ns606KotYFI46b6r2Ep6D7rEaT9reKxRHt6b0agDAj_gk_IsACT7Xin_0XLe56PKHy8k_LGhE2s8Me448JXzz7xU9oI"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                About National Estate
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                A Legacy of Quality and Trust in Construction
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                National Estate and Construction Company is a leader in
                delivering high-quality infrastructure and residential
                developments across Kampala. With a commitment to durability and
                value, we build more than just structures—we build legacies for
                generations to come.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <p className="font-semibold">
                    ISO 9001 Certified Quality Management
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                  <p className="font-semibold">
                    Team of 500+ Skilled Engineers & Craftsmen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            What We Do
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Comprehensive Engineering Solutions
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">
                home_work
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-4">
              Residential Construction
            </h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Custom luxury homes and high-end residential complexes designed
              for comfort and modern aesthetics.
            </p>
            <Link
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              to="/services"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          {/* Service 2 */}
          <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">
                apartment
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Commercial Projects</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Functional and sustainable office spaces, retail malls, and
              industrial warehouses engineered for business.
            </p>
            <Link
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              to="/services"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          {/* Service 3 */}
          <div className="p-8 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">
                landscape
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Estate Development</h4>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Large-scale master-planned communities and infrastructure
              development from the ground up.
            </p>
            <Link
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              to="/services"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                Portfolio
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                Legacy Projects
              </h3>
            </div>
            <Link
              to="/projects"
              className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              View Full Portfolio
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  alt="Kololo Towers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLk53f5hdOU6fC9fYo2xSjvfR_HYPprmMeuOljq8JT9sGIv2HD3flTdcPNTXcuHM4r7TaM-I7ql8FU00FlJmFuHo4iwWePGFmtSINlXQ_Uy2cGTzeQUbUTzR9OuFqWA0Z5o35sfADi080naaoa5ZqJen8H708dkvxFhAGlLhwSZQE2_h0oZJgZCG-E54NP73BgSKALSKeAvCUBamhy6mbQIO31Si-fLsP8V6CkJUdD1mo5C7kIzUE4gemE0Myn8roAwX5Vli6_BY8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Details{" "}
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Kololo Heights Towers</h4>
              <p className="text-slate-500 text-sm font-medium">
                Commercial • Kampala
              </p>
            </div>
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  alt="Nyonyi Villas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFS5QHZ8mfBHO1NnXUoJ7EY3ebiYvPlm-T-lNOHQIEvWq-kD-DzGZsnEmnavKOFHlxmOohNJ50crMq_kFdtSH27_3vdmKFdsbKBTHvxg_abeugpsWFhTesvv2RNIZxCC21KvrSiIwrTKOXiwLvKdTvkej9pByJPLu7OWT83eSftCWUq20uSV2ODetFCzZNpJDQZ2HrZJG85dvkZMUVOMJV_zjWIkdSUz-l3speND9O_4ncHBKcenlrKT3WdeEYrnhunmD4RRSuW38"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Details{" "}
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Nyonyi Luxury Villas</h4>
              <p className="text-slate-500 text-sm font-medium">
                Residential • Upper Kololo
              </p>
            </div>
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  alt="Lake View Estate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4denbOMd5GJlIB80acKntE2wPYbWXNx0tgndPrNyrlyt01uE5vJ1jCFYfYkFYe4tphryuQYRC7BKTeUFXYSKbzip3DFcldJiK4Hb3q7Z-TG6UjRRkWCk4TcB5c2bL7g-SNnNAfb_VfycKWXyYHoQReUet8XKgD9rk3DwzmVUnkweCxfQrBxuWwdfeas7TRWHuNIyhd4NY0GqYkls94tA8f8QLY0DNSJhmN3SwHa0dj_DPRytig_2y5k3gC4GOhboTSKjWzWScm_w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Details{" "}
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Victoria Lake Estate</h4>
              <p className="text-slate-500 text-sm font-medium">
                Estate Development • Entebbe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Block */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-charcoal rounded-[2.5rem] p-10 lg:p-20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white max-w-2xl leading-tight">
                Ready to build your legacy project?
              </h2>
              <p className="text-white/70 text-lg max-w-xl">
                Schedule a free site assessment and consultation with our expert
                engineers today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-primary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl"
                >
                  Request a Quote
                </Link>
                <a
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-3"
                  href="tel:0778022147"
                >
                  <span className="material-symbols-outlined">call</span> 0778
                  022147
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
