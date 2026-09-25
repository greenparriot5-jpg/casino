import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

function HeroSection() {
  const gameLink =
    "https://3pattino1.com?from_gameid=8254399&channelCode=7820420";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10";

  return (
    <section className="bg-gray-200 text-slate-900">

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 lg:px-8">

        <div className="flex justify-center">
          <span className="rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 text-xs font-semibold text-yellow-600 sm:text-sm">
            Teen Patti Gold Information
          </span>
        </div>

        {/* Main H1 */}
        <div className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Teen Patti Gold
            <span className="block text-yellow-500">
              3 Patti Game in Pakistan
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore Teen Patti Gold, a digital three-card game experience
            inspired by the traditional Teen Patti format. Learn the basic
            rules, card rankings, gameplay terminology, download guidance and
            useful information for players looking for a Teen Patti game in
            Pakistan.
          </p>
        </div>

        {/* Game Image */}
        <div className="relative mx-auto mt-8 max-w-2xl">

          <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/60">

            <a
              href={gameLink}
              className="block w-full cursor-pointer"
              aria-label="Open Teen Patti Gold game"
              rel="nofollow sponsored"
            >
              <img
                src={gameImage}
                alt="Teen Patti Gold 3 Patti card game"
                width="1200"
                height="675"
                loading="eager"
                fetchPriority="high"
                className="block h-[230px] w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02] sm:h-[280px]"
              />
            </a>

          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">

          <Link
            to="/about"
            className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
          >
            Learn About Teen Patti Gold
          </Link>

          <a
            href={gameLink}
            rel="nofollow sponsored"
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
            aria-label="Open Teen Patti Gold game"
          >
            <FaDownload aria-hidden="true" />
            Download Now
          </a>

        </div>
      </div>

      {/* Introduction */}
      <article className="border-t border-slate-300 bg-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
              Teen Patti Gold Guide
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Learn About the 3 Patti Game
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Our Teen Patti Gold guide explains the traditional three-card
              format, common hand rankings, basic terminology and useful
              information about playing digital card games.
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="rounded-3xl border border-slate-300 bg-white p-7 shadow-lg shadow-slate-300/40 sm:p-10 lg:p-12">

              <section>
                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  What Is Teen Patti Gold?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Teen Patti Gold is a digital card-game experience based on
                  the familiar three-card Teen Patti format. Teen Patti is
                  also commonly called 3 Patti, and its basic format involves
                  comparing three-card hands according to a traditional
                  ranking system.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Players who are researching a Teen Patti game in Pakistan
                  can use this website to learn more about the game format,
                  card rankings, terminology and general download information.
                  The goal is to provide clear information without making
                  unrealistic claims about results or winnings.
                </p>
              </section>

              <section className="mt-10">
                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Teen Patti Game Download in Pakistan
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  If you are searching for a Teen Patti game download in
                  Pakistan, always check the source before installing an
                  application. Use a trusted website or recognized app store
                  where possible, verify the application information and avoid
                  modified files from unknown sources.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Our{" "}
                  <Link
                    to="/download"
                    className="font-semibold text-yellow-600 hover:text-yellow-700"
                  >
                    Teen Patti Gold Download
                  </Link>{" "}
                  page provides general installation guidance and explains
                  what to consider before installing a card-game application.
                </p>
              </section>

              {/* Internal Navigation */}
              <section className="mt-10 border-t border-slate-200 pt-8">
                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  Explore Teen Patti Gold
                </h3>

                <div className="flex flex-wrap gap-3">

                  <Link
                    to="/about"
                    className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                  >
                    About Teen Patti Gold
                  </Link>

                  <Link
                    to="/blog"
                    className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                  >
                    Teen Patti Gold Blog
                  </Link>

                  <Link
                    to="/download"
                    className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                  >
                    Teen Patti Gold Download
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                  >
                    Contact Us
                  </Link>

                </div>
              </section>

            </div>
          </div>

        </div>
      </article>

    </section>
  );
}

export default HeroSection;