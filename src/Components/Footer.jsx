import { NavLink } from "react-router-dom";
import {
  FaCrown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
     <div className="mx-auto max-w-7xl px-6 pt-10 pb-3 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND / LEFT SIDE ================= */}
          <div className="lg:col-span-2">

            <NavLink
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20">
                <FaCrown className="text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-extrabold">
                  Teen Patti
                  <span className="text-yellow-400"> Gold</span>
                </h2>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Premium Card Experience
                </p>
              </div>
            </NavLink>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Explore useful information about three-card game formats,
              terminology, card rankings, digital interfaces and modern
              card-game experiences through a clean and easy-to-use platform.
            </p>

            {/* Premium Highlights */}
            <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-sm text-yellow-400" />
                  <span className="text-xs font-semibold text-slate-300">
                    Easy Guides
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-sm text-yellow-400" />
                  <span className="text-xs font-semibold text-slate-300">
                    Useful Content
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-sm text-yellow-400" />
                  <span className="text-xs font-semibold text-slate-300">
                    Modern Design
                  </span>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}
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

          {/* ================= INFORMATION ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Information
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Card Rankings
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  Game Terminology
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                >
                  General Guidelines
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} Three Patti Gold. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-5 sm:text-sm">

            <a
              href="#"
              className="transition duration-300 hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-yellow-400"
            >
              Terms & Conditions
            </a>

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
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;