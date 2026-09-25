import { Link } from "react-router-dom";
import { FaBookOpen, FaArrowDown } from "react-icons/fa";

function BlogHero() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-page-title"
      className="relative overflow-hidden bg-gray-200 py-8 text-slate-900 sm:py-10 lg:py-12"
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

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            <FaBookOpen aria-hidden="true" />
            Teen Patti Gold Blog
          </span>

          <h1
            id="blog-page-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Teen Patti Gold Blog
            <span className="block text-yellow-500">
              3 Patti Guides, Rules and Game Information
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore practical information about Teen Patti Gold, 3 Patti game
            rules, card rankings, gameplay basics, download guidance, online
            card-game features and responsible gaming information. Our guides
            are written to help beginners understand the traditional
            three-card format before exploring the digital experience.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <a
              href="#blog-posts"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Read Teen Patti Guides
              <FaArrowDown
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <Link
              to="/about"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              About Teen Patti Gold
            </Link>

            <Link
              to="/download"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Download Guide
            </Link>

          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                3 Patti
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Rules, rankings and basic gameplay concepts
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Game Guides
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Helpful information for new and returning players
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Updates
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                General information about digital card games
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;