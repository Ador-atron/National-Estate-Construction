import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-20 lg:px-40 py-10 md:py-16">
        <div className="relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 min-h-[400px] flex flex-col justify-end p-8 md:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(16, 22, 34, 0.2) 0%, rgba(16, 22, 34, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuABwZxpg9sXzUN4gmSWtxaFeInmQSiIMNdpRQEn9h562_bo1fmm2jwg3czCi6fJ5npdyRMWeLQYifybxoaLU6MostarlVi16r0CNb23yyHEIB1AickJFTTdE-KOp00QP3QKr-PbOtXC6qsszvwhjBWWJPpFnnJ9VZZHrs8Vdp3rzMKNNWgwxA--gmfUshfNygO_2YvgHuLbcPnE720G7C7AMsCGz-tBfSPGbpTXxZCqds-aKoTn--U0zprtfTgZbYg3_yt8ExAjxRc')",
            }}
          ></div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              About the Company
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
              Building with Discipline and Excellence
            </h1>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              A legacy of technical precision and structural integrity in the
              heart of Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Core Beliefs */}
      <section className="px-6 md:px-20 lg:px-40 py-12 bg-white dark:bg-slate-900/50">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Our Story
            </h2>
            <h3 className="text-slate-900 dark:text-white text-3xl font-bold mb-6">
              A Disciplined Construction Partner
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                National Estate's and Construction Company stands as a
                disciplined partner in Uganda's infrastructure development. We
                were founded on the principle that construction is not just
                about building structures, but about creating enduring legacies.
              </p>
              <p>
                With a commitment to integrity and precision, we transform
                architectural visions into enduring realities. Our team consists
                of elite engineers, designers, and project managers dedicated to
                professional excellence and ethical delivery.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 shadow-sm flex flex-col gap-4">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">target</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-2">
                  Our Mission
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  To deliver structurally sound, high-quality developments that
                  set new benchmarks for safety and durability across the
                  region.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 shadow-sm flex flex-col gap-4">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-2">
                  Our Vision
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  To be the most trusted leader in technical excellence and
                  construction innovation across Uganda and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process (Visual Step-by-Step) */}
      <section className="px-6 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Technical Workflow
          </h2>
          <h3 className="text-slate-900 dark:text-white text-4xl font-black">
            Our Execution Process
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            We maintain strict adherence to international building standards
            through a rigorous six-stage development cycle.
          </p>
        </div>
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              {
                step: 1,
                title: "Consultation",
                desc: "Initial engagement to understand project scope, budget constraints, and aesthetic goals.",
              },
              {
                step: 2,
                title: "Site Evaluation",
                desc: "Geotechnical analysis and environmental assessment to ensure foundation stability and compliance.",
              },
              {
                step: 3,
                title: "Planning & Design",
                desc: "Collaborative architectural drafting and engineering calculations for structural integrity.",
              },
              {
                step: 4,
                title: "Construction Execution",
                desc: "The main building phase, managed by experienced site foremen with strict safety protocols.",
              },
              {
                step: 5,
                title: "Quality Assurance",
                desc: "Multi-point inspections and stress tests to ensure the build meets our high durability standards.",
              },
              {
                step: 6,
                title: "Project Handover",
                desc: "Final walkthrough, delivery of maintenance documentation, and official key presentation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-colors group"
              >
                <div className="absolute -top-6 left-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-background-light dark:ring-background-dark">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="px-6 md:px-20 lg:px-40 py-20 bg-slate-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black text-primary mb-2">
              150+
            </p>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
              Projects Completed
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-primary mb-2">
              12
            </p>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
              Years of Trust
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-primary mb-2">
              100%
            </p>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
              Safety Record
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-primary mb-2">
              45+
            </p>
            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
              Expert Engineers
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 lg:px-40 py-20">
        <div className="bg-primary rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to start your project?
            </h2>
            <p className="text-white/80 text-lg">
              Partner with Uganda's most disciplined construction team today.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/projects"
              className="bg-primary/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-primary/30 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
