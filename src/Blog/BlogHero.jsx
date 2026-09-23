import { Link } from "react-router-dom";
import { FaBookOpen, FaArrowDown } from "react-icons/fa";

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-8 text-slate-900 sm:py-10 lg:py-12">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            <FaBookOpen />
            Teen Patti Gold Blog
          </span>

          {/* Main H1 */}
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Latest
            <span className="text-yellow-500"> Game Insights</span>
            <span className="block">and Information</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore useful articles, card-game guides, terminology,
            traditional Teen Patti concepts and general information about
            modern digital card-game experiences.
          </p>

          {/* Button */}
          <div className="mt-7 flex justify-center">
            <a
              href="#blog-posts"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Explore Articles

              <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>

          {/* Bottom Stats */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-3xl font-extrabold text-yellow-500">
                Guides
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Helpful game information
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-3xl font-extrabold text-yellow-500">
                Tips
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Card-game knowledge
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-3xl font-extrabold text-yellow-500">
                Insights
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                General game articles
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogHero;