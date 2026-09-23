import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

function HeroSection() {
  const gameLink =
    "https://3pattino1.com?from_gameid=8254399&channelCode=7820420";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10";

  return (
    <section className="bg-gray-200 text-slate-900">
      {/* ================= HERO TOP ================= */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 lg:px-8">

        {/* Small Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 text-xs font-semibold text-yellow-600 sm:text-sm">
            Welcome to Teen Patti Gold
          </span>
        </div>

        {/* ================= CENTER IMAGE ================= */}
        <div className="relative mx-auto mt-8 max-w-2xl">

          {/* Soft Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl" />

          {/* Image Box */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/60">

            {/* GAME IMAGE */}
            <a
              href={gameLink}
              className="block w-full cursor-pointer"
              aria-label="Play Teen Patti Gold"
            >
              <img
                src={gameImage}
                alt="Teen Patti Gold game"
                className="block h-[230px] w-full rounded-xl object-cover sm:h-[280px]"
              />
            </a>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-6 flex justify-center gap-3">

          {/* Learn More */}
          <Link
            to="/about"
            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
          >
            Learn More
          </Link>

          {/* Download */}
          <a
            href={gameLink}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
          >
            <FaDownload />
            Download Now
          </a>
        </div>
      </div>

      {/* ================= TEEN PATTI GOLD ARTICLE ================= */}
      <article className="border-t border-slate-300 bg-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

          {/* ================= HEADER ================= */}
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
              About Teen Patti Gold
            </p>

            {/* MAIN H1 */}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Teen Patti Gold – Play 3 Patti Online
              <span className="block text-yellow-500">
                Classic Card Game Experience
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Welcome to Teen Patti Gold, a modern digital gaming experience
              designed with simple navigation, useful information and an
              easy-to-understand interface for visitors.
            </p>
          </div>

          {/* ================= MAIN ARTICLE CARD ================= */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="rounded-3xl border border-slate-300 bg-white p-7 shadow-lg shadow-slate-300/40 sm:p-10 lg:p-12">

              {/* INTRO */}
              <section>
                <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Welcome to Teen Patti Gold
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Teen Patti Gold brings the familiar three-card game format
                  into a modern digital environment. Our website is designed to
                  provide visitors with useful information about the game, basic
                  gameplay, card rankings, terminology and important features
                  in one convenient place.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Whether you are discovering Teen Patti Gold for the first
                  time or already understand the basic format, our goal is to
                  keep the experience simple, clear and easy to explore.
                </p>
              </section>

            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HeroSection;