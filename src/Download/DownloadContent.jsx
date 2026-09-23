import { Link } from "react-router-dom";

const DownloadContent = () => {
  return (
    <section
      id="download-content"
      className="bg-gray-200 px-4 py-12"
    >
      <div className="mx-auto max-w-4xl">

        <article className="rounded-3xl border border-slate-300 bg-white p-6 shadow-lg sm:p-8">

          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            How to Download Teen Patti Gold
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Downloading Teen Patti Gold is simple. First, use an official
            website or a trusted app store to find the genuine Teen Patti Gold
            application. Select the download or install option and wait for the
            process to complete. After installation, open the game and follow
            the instructions shown on your screen to get started.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Android users should make sure they download the correct version
            for their device. Avoid unknown websites or modified APK files
            because they may not be safe. Always check the source before
            installing any application and keep the game updated when a newer
            version is available.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-slate-900">
            Before Installing Teen Patti Gold
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Check that your device has enough available storage and a stable
            internet connection. Only install applications from sources you
            trust, and avoid files that promise guaranteed rewards, modified
            features, or unlimited benefits.
          </p>

          {/* Internal Navigation */}
          <div className="mt-10 border-t border-slate-200 pt-8">

            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Explore More
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
                About
              </Link>

              <Link
                to="/blog"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Contact
              </Link>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
};

export default DownloadContent;