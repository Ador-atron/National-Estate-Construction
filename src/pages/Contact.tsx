export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-20">
        <div className="absolute inset-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcmEAPgP-O5_TgjYGyBuCbah8PbZyLotiSqgF4wHJW97_qutDWohPgqtt9wRmmW6i6GUYpBG2zjq5lhD30t13a-mmnWUYJql4KgcxWV6ZG_Oi-fc7wHMZXhVySc6kajb4w7v-R0aBRMCTiK1iSXrU9FUokqfhMw4lm2ybuSUt_sJQJveNANzZpauUquWMkf4IAu-D5hXKdlX3fTtd5drxbPQAyOvrqkK3HzwvxPf0MINPyC9b1mloJp4_v_-1bn1jmp1yJiTMr6ww')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded mb-4 border border-primary/30">
            Get in Touch
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Build Your Vision With{" "}
            <span className="text-primary">Confidence.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Ready to start your next construction project? Our team of experts
            is standing by to provide the guidance and excellence your
            investment deserves.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 -mt-12 mb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Info Cards */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Direct Line
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      0778 022147
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Head Office
                    </p>
                    <p className="text-base leading-relaxed font-semibold text-slate-900 dark:text-white">
                      Plot 1, Nyonyi Gardens Rd,
                      <br />
                      Upper Kololo Terrace, Kampala
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                  <p className="text-sm font-medium text-slate-500 italic">
                    Instant Response via WhatsApp:
                  </p>
                  <a
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-bold transition-all shadow-md"
                    href="#"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.514-2.961-2.628-.086-.114-.705-.935-.705-1.783 0-.848.44-1.264.596-1.432.155-.167.339-.209.453-.209s.226.004.324.011c.102.007.239-.039.375.286.136.326.467 1.139.508 1.223.041.084.068.182.011.295-.056.114-.085.183-.169.28-.084.098-.176.219-.251.295-.084.085-.172.178-.074.346.098.168.435.718.934 1.162.643.571 1.185.75 1.354.834.169.084.269.07.369-.045.1-.114.428-.497.541-.666.113-.169.226-.141.381-.085.155.056 1.002.473 1.171.557.169.084.282.127.324.198.042.07.042.407-.102.812zM12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9z"></path>
                    </svg>
                    Chat with an Expert
                  </a>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden aspect-video relative group border border-slate-200 dark:border-slate-800">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU5X5qa7VFM1uG-9wZEFoyUtqPY88FcvLXXucb3p2H7YI3NyD6UeHhUZ1jRljZxhouNh5s_0CvsRCPj6I8D5ywQlP1mkB0Klllj9WiqfDUGDf9ZEU4qNC6jQAc_2dp4eFeIGUNoKvhWRE2CScX3mco8TYeHDW7CYR6seuSPQupDDIq79IEcF2arW4rZxHk0y5F9NJx6eO99IRWeYucHh7zkxPT43PNj5n9_cvOWN8bfouoFtRGPnm3MFvvHacRGApYBVN-DgptNTw')",
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-slate-900 p-4 rounded shadow-lg flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Our Headquarters
                </span>
                <button className="text-primary text-xs font-bold flex items-center gap-1">
                  Open in Maps{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                Project Inquiry
              </h3>
              <p className="text-slate-500 mb-10">
                Fill out the form below and our consulting team will reach out
                within 24 hours.
              </p>
              <form
                action="#"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                    placeholder="+256..."
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Project Type
                  </label>
                  <select className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all">
                    <option>Residential Construction</option>
                    <option>Commercial Development</option>
                    <option>Renovation & Refurbishment</option>
                    <option>Real Estate Investment</option>
                    <option>Civil Engineering</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Budget Range
                  </label>
                  <select className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all">
                    <option>Below $50,000</option>
                    <option>$50,000 - $200,000</option>
                    <option>$200,000 - $500,000</option>
                    <option>$500,000 - $1,000,000</option>
                    <option>$1,000,000+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Detailed Message
                  </label>
                  <textarea
                    className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3 transition-all"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 group"
                    type="button"
                  >
                    Schedule a Site Consultation
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-4">
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats / Trust Bar */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-primary mb-1">15+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary mb-1">200+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary mb-1">50+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Expert Engineers
              </p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary mb-1">100%</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Safety Record
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
