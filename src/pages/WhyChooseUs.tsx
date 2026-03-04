import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full max-w-[1280px] px-6 py-8 md:px-20 mx-auto">
        <div className="relative overflow-hidden rounded-xl min-h-[400px] flex items-center bg-charcoal">
          <div
            className="absolute inset-0 opacity-40 bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCum2otQ3CcBv41sJbsDZphm5JhfG13e-mHty-XzSZh3weC-vSp_YiDpB_-ld6ZL2fTK6LeipHO724VRZ0mdAyeiLThBJD-NcuJf6P3ZI1lmThI6HodSgSxyxIVCUFxxtG4E1ij0l9rNrCdIKwB2g5vramH7Wbc80WL1Uf2jdz7WnixV8QRM9ivz0kI12Eo86yndHomd0me5-XZA2mUpXBIoNqykbgqrQvVXo53S4pELF1Lw_kJ9bEVrS4GarEJkRlz4gVB0I7gsrY")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-primary text-white rounded">
              Excellence in Engineering
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6">
              Built for Clients Who Value Precision.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">
              At National Estate's and Construction Company, we combine
              engineering excellence with unwavering commitment to deliver
              superior results in high-end development.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full max-w-[1280px] px-6 md:px-20 -mt-12 relative z-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-primary/5">
          <div className="flex flex-col items-center md:items-start gap-1 px-4 border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black leading-tight">
              250+
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 px-4 md:border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black leading-tight">
              15+
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 px-4 border-r border-slate-100 dark:border-slate-700">
            <p className="text-primary text-3xl font-black leading-tight">
              80+
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
              Expert Staff
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 px-4">
            <p className="text-primary text-3xl font-black leading-tight">
              99%
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="w-full max-w-[1280px] px-6 md:px-20 py-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-4">
            Our Credibility Pillars
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            We set the standard in high-end construction through a disciplined
            approach, transparent processes, and expert craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">
                account_tree
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                Structured Project Management
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Rigorous planning and scheduling to ensure every phase of
                construction is executed flawlessly from blueprint to handover.
              </p>
            </div>
          </div>
          {/* Pillar 2 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">forum</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                Transparent Communication
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Real-time updates and open channels to keep you informed at
                every step, ensuring full alignment with your vision.
              </p>
            </div>
          </div>
          {/* Pillar 3 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">
                precision_manufacturing
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                Quality Materials
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We source only premium, certified materials to ensure the
                structural longevity, sustainability, and safety of your
                investment.
              </p>
            </div>
          </div>
          {/* Pillar 4 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">
                engineering
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                Skilled Construction Team
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Our industry veterans bring decades of collective experience and
                technical mastery to solve complex site challenges.
              </p>
            </div>
          </div>
          {/* Pillar 5 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">
                visibility
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                On-Site Supervision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Dedicated site managers are present daily to maintain strict
                safety standards and resolve architectural issues instantly.
              </p>
            </div>
          </div>
          {/* Pillar 6 */}
          <div className="group flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">
                schedule
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                Timely Delivery
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Precision logistics and efficient, data-driven workflows ensure
                your project is completed on schedule without compromising
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="w-full bg-charcoal dark:bg-slate-950 py-16 px-6 md:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-white text-3xl font-black">
              Ready to build your vision?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Partner with the company that values precision as much as you do.
              Let's discuss your next project today.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20"
            >
              Consult with Experts
            </Link>
            <Link
              to="/projects"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold border border-white/20 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
