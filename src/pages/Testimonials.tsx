import { Link } from "react-router-dom";

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            Trust & Excellence
          </span>
          <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Built on Reputation, <br />
            <span className="text-primary">Proven by Results.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Over 20 years of delivering high-end construction and estate
            management services across the nation. Read what our partners say
            about our commitment to quality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/contact"
              className="flex h-12 items-center justify-center rounded-lg px-8 bg-primary text-white font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="flex h-12 items-center justify-center rounded-lg px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
        {/* Global Rating Card */}
        <div className="w-full lg:w-[400px] bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-3">
              <p className="text-slate-900 dark:text-slate-100 text-6xl font-black leading-none">
                4.8
              </p>
              <div className="flex flex-col pb-1">
                <div className="flex text-primary">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">
                    star_half
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  1,240 Verified Reviews
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              {/* Rating Bars */}
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-x-3">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  5
                </span>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: "82%" }}
                  ></div>
                </div>
                <span className="text-slate-500 text-xs font-semibold text-right">
                  82%
                </span>
              </div>
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-x-3">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  4
                </span>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: "14%" }}
                  ></div>
                </div>
                <span className="text-slate-500 text-xs font-semibold text-right">
                  14%
                </span>
              </div>
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-x-3">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  3
                </span>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: "3%" }}
                  ></div>
                </div>
                <span className="text-slate-500 text-xs font-semibold text-right">
                  3%
                </span>
              </div>
              <div className="grid grid-cols-[20px_1fr_40px] items-center gap-x-3">
                <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  2
                </span>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="text-slate-500 text-xs font-semibold text-right">
                  1%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">
                On-Site Impact
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Watch our clients share their journey through live project
                walkthroughs.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All Videos{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Card 1 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrd-hvNRXkIJsPt_UBaNl8extJVX9IFD8zmhFXsOYBJKqBRgzs_qmahSCLzBnTb4f2Bj-S3vWaZJzx61L_ePKN8UzylijJcyzpJe-XktLtq3jwsUB9ToseoNNwLofsKesSLWcStoLgI0qkL4N0o6XnJTnEyCnetHACQeNfac7eDU26GcHfhsZU-3zA8QdBPpllBkprIdUIzLaheDmSPykPXXZttW_425urrz6Rdeaho537mqKtooap_uv1rN6j6OzKO9T8-x8d2Zc')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined !text-4xl fill-1">
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-bold">
                  City Center Development
                </p>
                <p className="text-white/80 text-sm">
                  Case Study: 18 Months Completion
                </p>
              </div>
            </div>
            {/* Video Card 2 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEr3uF4ywDAyEdT67iFT7WHpJ-hHlNzN5r50deeBrDCXxIGEA4naCMjn3ZrUEuuj_RzucwEQXOpTuiCH2Oot2chnOg9fKmLEBX8tAc4zvGv4A4aNBxyOfr2YHmflSbUjbgJjymeUoLzoABdmGtxjqz2T2noEetaZXkWLHZ3eNwQSL3dpeuNBVEqABztnbkGwyU8fV_IJae2Auq85jo-dAMzbS3AExXPmEfCVIr-OXaI6WBfhFxsVngFQdi6gI6f-1g8cmJ2uW4dNs')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined !text-4xl fill-1">
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-bold">
                  Luxury Residential Estate
                </p>
                <p className="text-white/80 text-sm">
                  Interview with Mr. Harrison
                </p>
              </div>
            </div>
            {/* Video Card 3 */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcL_pny1RUTaq_ys2jIVP2j-Whj-i2n1ZR20KQlqHCqaoFxTv2oGIEisWjAgoSAsnaEwaNygRWtgs1moDUE4DP7beoznL30rBtENqF4fme60RBFEXo3e-rXeBx-Gp0Meu0w0LS1o_wUaGiMqDLfOYb21yffIIFPhvOAwpGnxtcvpAc6sIqCdeUDvaCF_GhB7PfBf5z6BlqPv3fCKMImosv601cRdfV4DVzl0IEmvHZR_QaynvQfNZq5AvlZDA-DSVEG6fEfPjUfxc')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined !text-4xl fill-1">
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-bold">
                  Nexus Tech Headquarters
                </p>
                <p className="text-white/80 text-sm">
                  Industrial Design Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pull Quote */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
        <div className="relative bg-primary rounded-[2rem] p-10 md:p-20 overflow-hidden">
          <div className="absolute top-0 right-0 p-10 text-white/10 select-none">
            <span className="material-symbols-outlined !text-[200px]">
              format_quote
            </span>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
            <div className="flex text-yellow-400">
              <span className="material-symbols-outlined !text-3xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-3xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-3xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-3xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-3xl fill-1">
                star
              </span>
            </div>
            <blockquote className="text-white text-3xl md:text-5xl font-extrabold italic leading-tight">
              "The level of precision and professionalism on the Nexus site was
              unmatched. They didn't just build a structure; they executed a
              vision with absolute authority."
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="text-white text-xl font-bold">Sarah Jenkins</p>
              <p className="text-white/70 text-base">
                CEO, Horizon Real Estate Group
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-10 pb-24">
        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight mb-12 text-center md:text-left">
          Client Perspectives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  alt="Client Headshot"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpk1qHQgG3fhIFsok4JGI4KE3Kxwt-hH4kRwjtDbYQlVCMrW1j6IaZSjIl4O56CdYNhgmUKeqWrOnBQlim7g-7KkLibFNPdZ1aTVGULvbv-mIYsvntRwL3zAHW8pB18lEFbxnQXH1hVGAnCAghCbSX6UbINKR7wPN5scnZiZXC4LnBrC9dtCWBAgt7DGW3R3QFQ8avpGp2GUR534eWN3zuQQOvcnIQhs5AEp2zsfEUnPFjyD0HPvcXFHoyIvpKU-BjzU0ElEXUZRw"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  David Miller
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Private Developer
                </p>
              </div>
            </div>
            <div className="flex text-primary">
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "National Estate handled our complex foundation work with ease.
              Their on-site engineers are top-tier professionals who value
              safety and speed equally."
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  alt="Client Headshot"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA61SWorXc5Y02-Eq3iHPi-nmzZ_5JJQQxhwvg0i2NbepzBjTeRIk8xGFDqdzhz5k9DLvV-pu-KigWkxm8b__VMKctrgX2ch0GJ3hUwkz-WSTm7FSdIA37AiAKqUhK1KOhHsYE6EHebQgrzDfgpMXUsnMurNW9WE5uJ50cAez5q1MUPSURH4Tf2ZvvCMplwKzEawePVbkAlydZ6zXXBbuwcAZWz_X0qetUPFo-2ERaxnX5Zvj8mvgjGz2FqvGdQmlE2uPOjxjKlvMY"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Elena Rodriguez
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Urban Planning Lead
                </p>
              </div>
            </div>
            <div className="flex text-primary">
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "Transparency is rare in construction, but National Estate
              provided weekly detailed audits that kept our stakeholders
              confident throughout the project."
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  alt="Client Headshot"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU8RXxyjzpFDSsgekaWGDfjJcaWCkLBDrb2vzAsea_e-OWSelUKnhOHP1lPEEhx1zeU5N-EwAoGDimrqg-Zwa5YrNkmwV_RnlxBilQR1-jON1qs9PIW9YTeXoEdyKEKToOYGvSiVt1CF_afoj67T3QeJdAglouzxWI1rf0YPSGd1XCdajl93rmb1YFZXXSyvJLPkWPk6GjN1dO3JaYgB_bo7EtZ8sNTLP0dZOKN2LJW9E65ScnLM0Wnkns8qIjWbyE21J7zv9B8wU"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-100">
                  Thomas Chen
                </p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Director at CoreGroup
                </p>
              </div>
            </div>
            <div className="flex text-primary">
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
              <span className="material-symbols-outlined !text-xl fill-1">
                star
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "From architectural review to the final punch list, they delivered
              a zero-defect building 2 weeks ahead of schedule. Truly a reliable
              construction partner."
            </p>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="flex items-center justify-center rounded-lg h-12 px-10 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
            Load More Reviews
          </button>
        </div>
      </section>
    </>
  );
}
