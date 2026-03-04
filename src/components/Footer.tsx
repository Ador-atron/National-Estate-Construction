import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-primary">
                <svg
                  className="size-8"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight uppercase">
                National Estate
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading construction and estate development company in Kampala,
              Uganda. Building with integrity and durability.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Services</h5>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/services"
                >
                  Residential Buildings
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/services"
                >
                  Commercial Complexes
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/services"
                >
                  Estate Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  to="/services"
                >
                  Renovations & Repairs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Contact Info</h5>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <span>
                  Plot 1, Nyonyi Gardens Rd,
                  <br />
                  Upper Kololo Terrace, Kampala
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  call
                </span>
                <span>0778 022147</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <span>info@nationalestate.ug</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Newsletter</h5>
            <p className="text-white/60 text-sm mb-4">
              Stay updated with our latest projects and insights.
            </p>
            <div className="flex gap-2">
              <input
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:ring-primary focus:border-primary"
                placeholder="Your email"
                type="email"
              />
              <button className="bg-primary p-2 rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <p>
            © 2024 National Estate & Construction Company. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link className="hover:text-white transition-colors" to="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" to="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
