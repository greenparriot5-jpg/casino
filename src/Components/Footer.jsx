import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pb-3 pt-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand / About */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="inline-flex items-center">
              <div className="flex h-12 items-center justify-center rounded-xl bg-yellow-400 px-4 text-slate-950 shadow-lg shadow-yellow-400/20">
                <h2 className="text-xl font-extrabold">
                  Teen Patti
                  <span className="text-slate-950"> Gold</span>
                </h2>
              </div>
            </NavLink>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Teen Patti Gold is a digital card-game experience based on the
              classic 3 Patti format. Explore game information, card rankings,
              gameplay guides, download information, and useful articles about
              Teen Patti Gold.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-xs font-semibold text-slate-300">
                  Easy Guides
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-xs font-semibold text-slate-300">
                  Useful Content
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-xs font-semibold text-slate-300">
                  Modern Design
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/download"
                  className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                >
                  Download
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Information
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Information
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Card Rankings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Terminology
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/download"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  General Guidelines
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} Teen Patti Gold. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-5 sm:text-sm">
            <NavLink
              to="/"
              className="transition duration-300 hover:text-yellow-400"
            >
              Privacy Information
            </NavLink>

            <NavLink
              to="/about"
              className="transition duration-300 hover:text-yellow-400"
            >
              Terms Information
            </NavLink>

            <NavLink
              to="/contact"
              className="transition duration-300 hover:text-yellow-400"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Back To Top */}
        <div className="mt-5 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;