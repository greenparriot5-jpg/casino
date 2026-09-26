import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section
      aria-labelledby="about-page-title"
      className="relative overflow-hidden bg-gray-200 py-10 text-slate-900 sm:py-12 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            About Teen Patti Gold
          </span>

          <h1
            id="about-page-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            About Teen Patti Gold
            <span className="block text-yellow-500">
              3 Patti Game Information and Guide
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover Teen Patti Gold, a digital interpretation of the
            traditional three-card Teen Patti format. Learn about basic
            gameplay, card rankings, multiplayer features, download guidance,
            and useful information for new and returning players.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="#about-content"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Read the Full Guide
            </a>

            <Link
              to="/download"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Teen Patti Gold Download
            </Link>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-yellow-500">
                3
              </div>

              <p className="mt-1 text-sm text-slate-600">
                Cards Per Hand
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-yellow-500">
                Classic
              </div>

              <p className="mt-1 text-sm text-slate-600">
                Teen Patti Format
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
              <div className="text-3xl font-extrabold text-yellow-500">
                Digital
              </div>

              <p className="mt-1 text-sm text-slate-600">
                Modern Game Experience
              </p>
            </div>

          </div>

        </div>
      </div> 
    </section>
  );
}

export default AboutHero;