import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-40 py-16 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwvmG3sWmOj4ZXVRkzzYmZqNF6uma3P1mRb6IEL-b45gFRX44jpGTNSAZCPALG1d8COI7sJZQQ2bOrMKR3zyL_Uz5qCiZ0rQxO4ExK51Zl01lnR3tLytKHDn6TbXm8Ds2AhMD7C51uayqmLSzSX4DGn-hJJ3z3sM436VSNUNDnD3CpHaUZ1E-wkVyXBtwUtCqtapyEP_66lOMvguEdNp_VLvxMp-pRORnMusZHoEj3EUl8ZibR2KPGWom3LH-Sf8VxMpmy2Kt_xrA")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent"></div>
        <div className="relative z-10 max-w-[960px]">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
            Our Construction & Development Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Delivering excellence across residential, commercial, and estate
            development projects nationwide with precision and integrity.
          </p>
        </div>
      </section>

      <div className="px-6 lg:px-40 py-12 flex flex-col gap-16 max-w-[1400px] mx-auto w-full">
        {/* 1. Residential Construction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">home_work</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Category 01
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Residential Construction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              We build tailored living spaces designed for comfort, luxury, and
              long-term durability. Our residential team focuses on creating
              homes that reflect personal style while adhering to the highest
              structural standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Who it's for
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Private homeowners and luxury property developers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Project Scope
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Custom villas, high-end apartments, and urban townhouses.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Energy-efficient sustainable designs
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Premium finishes and materials
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="flex w-fit mt-4 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:scale-[1.02] transition-transform"
            >
              Request a Site Visit
            </Link>
          </div>
          <div className="order-1 lg:order-2 h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1AKsC0zy4kxR8XEJOEJNxhyew4HDxzEVr8Oh1Tygp3jfBR5Q1LQSqGdyYWLJJS-BeigKOOUKqYkZcQkkv2EgWPtg0n8Uha72sEsLz5foGcO6FeJr3TS0weoQhOqX8cAyCb7KiOjej2pU1kml0Rb_Qmol8rVe3djZDOrzYxvQQUMdlYmFKyPY4zVukyT4ck-jsxm-rvHkJmKL1bmWVTAFZhr9i_kxWlhYxRMBk98puE5MBHr51R0FNjOezSNvFckgve9QTtweOVqU")',
              }}
            ></div>
          </div>
        </div>

        {/* 2. Commercial Construction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvIsVJ0YiN8S_atRpgadGbhJsdwLcEilh6ebRsqNcsEZgAtT9mFLnL2ZUzHZ7HjwT_R_FSJ6jcVT_olqCequNwtROZaUcWCPHGuVRImwp8IqhxTkaHxmBOXweo8-IZyOic1Be4iAQvVcK5T2-r2NGC_v_n62yIUayb66_QkN7G9dFNZyTeULWw7aT9PYl6-RjtSjQaOWvPqTkWAagkfkqP7mK58Xps7RdpXGiffA5oS4bGwyHLjUXvsbFjFRWnKslVruO1IskHSuU")',
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">business</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Category 02
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Commercial Construction
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Functional, efficient, and iconic commercial spaces that drive
              business growth. We understand the complexities of corporate
              infrastructure and delivery timelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Who it's for
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Corporations, retailers, and institutional organizations.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Project Scope
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Office hubs, retail plazas, and hospitality centers.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  On-time delivery for business readiness
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Scalable and future-proof floor plans
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="flex w-fit mt-4 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:scale-[1.02] transition-transform"
            >
              Request a Site Visit
            </Link>
          </div>
        </div>

        {/* 3. Estate Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">map</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Category 03
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Estate Development
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Large-scale land development and community planning. We transform
              raw land into vibrant, serviced estates with world-class
              infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Who it's for
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Investors, government bodies, and land syndicates.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Project Scope
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Gated communities, industrial parks, and site servicing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  High ROI through strategic master planning
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Complete infrastructure (roads, drainage, power)
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="flex w-fit mt-4 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:scale-[1.02] transition-transform"
            >
              Request a Site Visit
            </Link>
          </div>
          <div className="order-1 lg:order-2 h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUNBk6T7dXbbNUC0LJhpaTmTrvED3UgEL63_g7WuF3BjWgjXypldZb01uyX9VkZ0iMCvHVEy1ln6Zi7d-o7V4MeEkUHXQyxqWNo-mwXxbUGXKpvLxZvH2eGri4BDPNicJgLOieGV58a_qai6kxwNSbxqSFQskuXJGMykEQvnxhIHjl-0wilqwjwoauqQDvZAXibCUqUGMiMvc1utB87muMzwOKRVdUwbnqa8_lYNWKR84rqdoD7LF5FMig2DnNbODOrfycbcSCJ14")',
              }}
            ></div>
          </div>
        </div>

        {/* 4. Renovation & Remodeling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN4NhWeNvHuEYCemnmhfs1BVYg9-QAdLaZNXghPbGjXlq9r46-YwnE22-k6VnVqO3o-CK-WtBBxl4QO3iK9olc_Vs5vp3wvimiJBa0I4b2YpP5DT0TOPmn8n9pjsZN3Qb4XNutaCKxSUNnfnHjjtIwS3DRXEmC9Jh3b-a1VGXPET0rmX017wqH9N4cJ79imxjrqne3gWQd5FxUC-8AbwhhZSuQ07LFQFvCr00nnYS63okMWiOC6Wc8ypelsdKGUaC4mEbmfBL-jo4")',
              }}
            ></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">architecture</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Category 04
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Renovation & Remodeling
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Breathing new life into existing structures. We modernize spaces
              while preserving character, ensuring a seamless blend of old and
              new.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Who it's for
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Property owners looking to increase asset value.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Project Scope
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Kitchen & bath upgrades, structural extensions, and full
                  retrofits.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Immediate property value appreciation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Improved spatial flow and ergonomics
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="flex w-fit mt-4 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:scale-[1.02] transition-transform"
            >
              Request a Site Visit
            </Link>
          </div>
        </div>

        {/* 5. Project Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">assignment</span>
              <span className="uppercase tracking-widest text-xs font-bold">
                Category 05
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Project Management
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Comprehensive oversight of construction cycles. We manage
              logistics, vendors, and compliance so you don't have to worry
              about the details.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Who it's for
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Hands-off owners and complex multi-vendor projects.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">
                  Project Scope
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Timeline tracking, budget management, and safety audits.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-900 dark:text-white">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Significant cost savings through efficient procurement
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Zero-stress ownership experience
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="flex w-fit mt-4 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold hover:scale-[1.02] transition-transform"
            >
              Request a Site Visit
            </Link>
          </div>
          <div className="order-1 lg:order-2 h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOsG_csvgZTG4Mo5IRqb1XT96bc2RT_ses6-MBW2b587LXTjfSwl8lewPgU5JJHhy5A01aQxWOuzZAIfzf4WY6_Z1mlOwtCAmfhv1chqvbkN1Yyys3waSQrN_WCaFT8YOtH_cC8rS8DQ14io7LmEbl9NuZJww-6lE_uCoX8tFR7wWBSTQyeaVRYxpwYpccJAvFVKMSan7gYEHDp431-HkypwxbSxGivvD8t4Roj9zy9idd40rOj8xsyK3kDbN3M3Q33204klHnpz4")',
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Global CTA Section */}
      <section className="mt-16 px-6 lg:px-40 py-20 bg-slate-900 dark:bg-slate-950 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-slate-400 max-w-2xl mb-10 text-lg">
          Whether it's a dream home or a landmark commercial development, our
          team is ready to bring your vision to life with precision and
          excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="flex items-center justify-center min-w-[200px] h-14 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Request a Consultation
          </Link>
          <Link
            to="/projects"
            className="flex items-center justify-center min-w-[200px] h-14 bg-transparent border-2 border-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
