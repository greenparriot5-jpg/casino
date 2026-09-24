import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 py-8 text-slate-900 sm:py-10 lg:py-12">

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

          {/* Main H1 */}
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Contact
            <span className="text-yellow-500"> Teen Patti Gold</span>
            <span className="block">Information & Support</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a question, suggestion, or need general information about
            Teen Patti Gold? Use the contact form below to send your message
            and explore the useful information available on our website.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <a
              href="#contact-content"
              className="rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg"
            >
              Contact Form
            </a>

            <Link
              to="/"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Back to Home
            </Link>

          </div>

          {/* Information Cards */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3">

            {/* Support */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Support
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                General questions and website assistance.
              </p>
            </div>

            {/* Feedback */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Feedback
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share useful thoughts and suggestions.
              </p>
            </div>

            {/* Information */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
              <h2 className="text-2xl font-extrabold text-yellow-500">
                Information
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Learn more about Teen Patti Gold.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHero;