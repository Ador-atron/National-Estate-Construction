import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              Our <span className="text-primary">Portfolio</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Crafting the skyline of Uganda with precision engineering and
              luxury design. From high-rise residential towers to expansive
              commercial estates.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-6 py-3 rounded-xl font-bold transition-all border border-slate-300 dark:border-slate-700"
          >
            <span className="material-symbols-outlined">chat_bubble</span>
            Discuss Your Project With Us
          </Link>
        </div>
        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            All Projects
          </button>
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-sm font-semibold hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-lg">home</span>
            Residential
          </button>
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-sm font-semibold hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-lg">business</span>
            Commercial
          </button>
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full text-sm font-semibold hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-lg">landscape</span>
            Estate Dev
          </button>
          <div className="ml-auto flex items-center gap-2 text-slate-500 text-sm font-medium">
            <span className="material-symbols-outlined text-lg">
              filter_list
            </span>
            <span>Sort by: Newest</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
              <img
                alt="Kololo Heights Towers"
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5BGCgYjkhG5FrVc2M2Sbiu_jocaBObmAnlAph4y6U8wU12A-qgUp3VLbD9V_DEUNSruD-UnariMyTiAatkgegWEoDJqPHsmI24N8rx35JTR307Y6XGJW4v345B0KkkPCy57GmCYnXtQSab_z5rNtl1eQDm4w-7Z2Wn2WkGo5o7E-U7KwmQZj10wiD5AeAy-CNd18vEFuhWJzlgfshnXrb5Hs_L7P7Bm5RpaNRacrgwK-SXQRjBe906tetiknQE-ER-owfxFtG0DY"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                  Residential
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Kololo Heights Towers
                </h3>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_outward
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>Kampala, Uganda</span>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-slate-400">
                  <span>Outcome</span>
                  <span className="text-green-500">Completed 2023</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  "Delivered 24 luxury units with LEED certification."
                </p>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
              <img
                alt="Nyonyi Luxury Villas"
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQwlqKpKY3N_ntYCgxwb-GvKxE2yPWsDAxvERnNM-_5DOwel9n0VarTq2hsm_TkUVYOTtLeOxUGdxQpn4ux_AE86jBjHDBZ4qyhsddyBsH-Uux_Z40oWn41xIDd1-vHqY1d2U4S7H8ryTt9zPaS_94bM8rrhWgq6-9pmMFcyZz4SRF37Zi2GqcPb_iCUUpzbBise8bKn7BZX3wf_dpBLF3wMFR1CDwsRk4QXFf7vWAb6Fhbc2yWPzyC4OpdAfWV1eyvVN790rKFrU"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                  Estate Dev
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Nyonyi Luxury Villas
                </h3>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_outward
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>Kampala, Uganda</span>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-slate-400">
                  <span>Outcome</span>
                  <span className="text-green-500">Completed 2022</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  "Luxury finish with private infinity pools for 12 estates."
                </p>
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
              <img
                alt="Victoria Lake Estate"
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLUMA-qNwrKeAZjpG9OjXWfKiIyMOwAanK6M42Jm-3g79zhXZoyhq46C8LIqz5kvhgTvUFaDOFXRjgGzEY9z4kqgloR0uC7iOmwKVX_EzvZinhzHEBSk3FopSwcTYQP5aHog0ClfTY1Ai4wqBS0MhnQC8qixb4v1Eo2F1KYjoNkPJls4pPOawY_0IYNZTIHU7TaApJwhja2dI4dfywLcGUCQM1QQyyftRB73TFcTQIlOGizzew1PxV-eEhvRYQ3qfuLM5YLrDWonk"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                  Mixed-Use
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Victoria Lake Estate
                </h3>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_outward
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>Entebbe, Uganda</span>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-slate-400">
                  <span>Outcome</span>
                  <span className="text-blue-500">Ongoing Phase II</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  "Sustainable infrastructure integrating lakeside commerce."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Load More / Stats */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Showing 3 of 42 Projects
          </p>
          <button className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-primary px-8 py-3 rounded-xl font-bold transition-all">
            Load More Work
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-slate-900 dark:bg-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to build your vision with{" "}
            <span className="text-primary">National Estates?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the hundreds of property owners and developers who trust us
            with Uganda's most ambitious construction projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20"
            >
              Discuss Your Project With Us
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
