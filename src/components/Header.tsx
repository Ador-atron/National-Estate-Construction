import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

export default function Header() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              National Estate
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-semibold transition-colors",
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden lg:flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 text-slate-700 dark:text-slate-300 transition-all"
              href="tel:0778022147"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
