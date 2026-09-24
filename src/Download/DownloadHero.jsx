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
    <section className="relative overflow-hidden bg-gray-200 pt-6 pb-12 text-gray-900 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            Teen Patti Gold Download
          </span>

          {/* Single Main H1 */}
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Download
            <span className="text-yellow-500"> Teen Patti Gold</span>
            <span className="block">and Get Started</span>
          </h1>

          {/* Game Image */}
          <div className="relative mx-auto mt-8 max-w-2xl">

            <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-1.5 shadow-xl shadow-gray-400/30">

              <a
                href={GAME_URL}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="block"
                aria-label="Visit Teen Patti Gold"
              >
                <img
                  src={IMAGE_URL}
                  alt="Teen Patti Gold game"
                  width="800"
                  height="450"
                  className="block h-[220px] w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02] sm:h-[280px]"
                />
              </a>

            </div>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Learn about Teen Patti Gold, its classic three-card format,
            digital card-game experience, supported mobile devices and
            important information to review before getting started.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">

            {/* Download */}
            <a
              href={GAME_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
              aria-label="Visit Teen Patti Gold download"
            >
              <FaDownload />

              Download Now

              <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            {/* Home */}
            <Link
              to="/"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
            >
              Back to Home
            </Link>

          </div>

          {/* Bottom Stats */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            {/* Box 1 */}
            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-yellow-500">
                <FaMobileAlt className="text-2xl" />
                Mobile
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Mobile-friendly digital experience
              </p>

            </div>

            {/* Box 2 */}
            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="text-3xl font-extrabold text-yellow-500">
                Simple
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Easy-to-understand game information
              </p>

            </div>

            {/* Box 3 */}
            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="text-3xl font-extrabold text-yellow-500">
                Modern
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Contemporary digital card experience
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default DownloadHero;