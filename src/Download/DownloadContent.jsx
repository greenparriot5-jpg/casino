import { Link } from "react-router-dom";

const DownloadContent = () => {
  return (
    <section
      id="download-content"
      className="bg-gray-200 px-4 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">

        <article className="rounded-3xl border border-slate-300 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          {/* Main Content Heading */}
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How to Download Teen Patti Gold
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Teen Patti Gold is a digital version of the traditional three-card
            Teen Patti experience. Visitors looking for a Teen Patti Gold
            download should first check that they are using a trusted and
            appropriate source. Before installing any application, review the
            available information and make sure the version is suitable for
            your device.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Android users should check their device storage, internet
            connection and software compatibility before starting an
            installation. A stable connection can help prevent interrupted
            downloads, while sufficient storage space allows the application
            to install correctly. Users should also follow the installation
            instructions displayed by their device.
          </p>

          {/* Installation Heading */}
          <h2 className="mt-8 text-2xl font-extrabold text-slate-900">
            Before Installing Teen Patti Gold
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Always check the source of an application before installing it.
            Avoid unknown websites, modified APK files and downloads that make
            unrealistic promises about guaranteed rewards or special benefits.
            Using trusted distribution channels and keeping applications
            updated can help provide a safer and more reliable digital
            experience.
          </p>

          {/* Getting Started */}
          <h2 className="mt-8 text-2xl font-extrabold text-slate-900">
            Getting Started With Teen Patti Gold
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            After installation, open the application and follow the instructions
            shown on your device. New players can begin by learning the basic
            Teen Patti rules and understanding the traditional three-card
            rankings. Players who are already familiar with 3 Patti can explore
            the available game options and become familiar with the current
            interface.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            The exact features, game modes and availability may change between
            application versions or regions. For this reason, users should rely
            on the current information provided by the relevant application or
            service rather than assuming that every feature will always be
            available.
          </p>

          {/* Responsible Use */}
          <h2 className="mt-8 text-2xl font-extrabold text-slate-900">
            Safe and Responsible Use
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Teen Patti is a card game that involves chance, so there is no
            guaranteed method for predicting every result. Users should avoid
            unofficial tools, modified applications, suspicious links and
            claims of guaranteed winnings. Always follow the applicable rules,
            age requirements and terms of the service you choose to use.
          </p>

          {/* Internal Navigation */}
          <div className="mt-10 border-t border-slate-200 pt-8">

            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Explore Teen Patti Gold
            </h2>

            <div className="flex flex-wrap gap-3">

              <Link
                to="/"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Home
              </Link>

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
                to="/contact"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </article>

      </div>
    </section>
  );
};

export default DownloadContent;