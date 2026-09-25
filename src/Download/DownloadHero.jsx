import { Link } from "react-router-dom";
import {
  FaDownload,
  FaArrowDown,
  FaMobileAlt,
} from "react-icons/fa";

const GAME_URL =
  "https://3pattino1.com?from_gameid=8254399&channelCode=7820420";

const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10";

function DownloadHero() {
  return (
    <section
      aria-labelledby="download-page-title"
      className="relative overflow-hidden bg-gray-200 pb-12 pt-6 text-gray-900 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Page Label */}
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            Teen Patti Gold Download
          </span>

          {/* Single H1 */}
          <h1
            id="download-page-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Teen Patti Gold Download
            <span className="block text-yellow-500">
              3 Patti Game in Pakistan
            </span>
          </h1>

          {/* Intro */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Learn how to access Teen Patti Gold, understand the 3 Patti game
            format, check device requirements, and review important information
            before installing or playing an online card game in Pakistan.
          </p>

          {/* Game Image */}
          <div className="relative mx-auto mt-8 max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-1.5 shadow-xl shadow-gray-400/30">
              <a
                href={GAME_URL}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="block"
                aria-label="Open Teen Patti Gold game"
              >
                <img
                  src={IMAGE_URL}
                  alt="Teen Patti Gold 3 Patti card game"
                  width="800"
                  height="450"
                  loading="eager"
                  fetchPriority="high"
                  className="block h-[220px] w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02] sm:h-[280px]"
                />
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href={GAME_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              aria-label="Open Teen Patti Gold download"
            >
              <FaDownload aria-hidden="true" />

              Download / Open Game

              <FaArrowDown
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <Link
              to="/about"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-gray-50 hover:shadow-md"
            >
              Learn About 3 Patti
            </Link>

          </div>

          {/* Quick Internal Links */}
          <nav
            aria-label="Teen Patti Gold download navigation"
            className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold"
          >
            <Link
              to="/"
              className="text-gray-600 transition hover:text-yellow-600"
            >
              Teen Patti Gold Home
            </Link>

            <Link
              to="/about"
              className="text-gray-600 transition hover:text-yellow-600"
            >
              About Teen Patti Gold
            </Link>

            <Link
              to="/blog"
              className="text-gray-600 transition hover:text-yellow-600"
            >
              3 Patti Guides
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 transition hover:text-yellow-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Information Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-yellow-500">
                <FaMobileAlt
                  aria-hidden="true"
                  className="text-2xl"
                />
                Mobile
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Designed for a convenient mobile card-game experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="text-3xl font-extrabold text-yellow-500">
                3 Patti
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Learn the traditional three-card game format.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
              <div className="text-3xl font-extrabold text-yellow-500">
                Simple
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Clear information for new and returning players.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadHero;