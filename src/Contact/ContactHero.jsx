import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-title"
      className="relative overflow-hidden bg-gray-200 py-10 text-slate-900 sm:py-12 lg:py-16"
    >
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Page Label */}
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-50 px-5 py-2 text-sm font-semibold text-yellow-700 shadow-sm">
            Contact Teen Patti Gold
          </span>

          {/* ONE MAIN H1 */}
          <h1
            id="contact-page-title"
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Contact Teen Patti Gold
            <span className="block text-yellow-500">
              Game Information & Support
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Contact Teen Patti Gold if you have a general question about the
            website, Teen Patti gameplay, 3 Patti information, download
            guidance, or the content available on our pages. You can also send
            feedback or suggestions to help us improve the information
            provided for visitors.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            If you are learning how to play Teen Patti, looking for basic card
            rankings, or searching for Teen Patti Gold download information,
            explore our website before sending your question. Our
            <Link
              to="/about"
              className="mx-1 font-semibold text-yellow-700 hover:text-yellow-800"
            >
              About Teen Patti Gold
            </Link>
            page explains the game format, while our
            <Link
              to="/blog"
              className="mx-1 font-semibold text-yellow-700 hover:text-yellow-800"
            >
              Teen Patti Gold Blog
            </Link>
            provides additional guides and general game information.
          </p>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="#contact-content"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Send a Message
            </a>

            <Link
              to="/download"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Download Information
            </Link>

            <Link
              to="/"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Visit Home
            </Link>

          </div>

          {/* Information Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Questions
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Ask general questions about Teen Patti Gold and 3 Patti
                information available on our website.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Feedback
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share suggestions or feedback about our articles, guides, and
                website content.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore gameplay, download guidance, card rankings, and other
                Teen Patti Gold information.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHero;