import { FaDownload, FaArrowDown, FaMobileAlt } from "react-icons/fa";

const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10";

function DownloadHero() {
  return (
    <section className="relative overflow-hidden bg-gray-200 pt-6 pb-12 text-gray-900 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          {/* ================= CENTER IMAGE ================= */}

          <div className="relative mx-auto mt-2 max-w-2xl">

            {/* Soft Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl" />

            {/* Image Box */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-1.5 shadow-xl shadow-gray-400/30">

              {/* IMAGE DOWNLOAD */}

             {/* IMAGE DOWNLOAD */}

<a
  href="teenpattigold99.com?from_gameid=8756858&channelCode=100000"
  download
  className="block"
  aria-label="Download Teen Patti Gold"
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
    alt="Teen Patti Gold game"
    className="block h-[220px] w-full rounded-xl object-cover transition duration-300 hover:scale-[1.02] sm:h-[280px]"
  />
</a>

            </div>

          </div>

          {/* ================= DESCRIPTION ================= */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Learn about the digital card-game experience, supported platforms,
            general features and useful information before getting started.
          </p>

          {/* ================= BUTTONS ================= */}

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            {/* DOWNLOAD BUTTON */}

         <a
  href="teenpattigold99.com?from_gameid=8756858&channelCode=100000"
  download
  className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
>
  <FaDownload />

  Download Now

  <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
</a>

            {/* HOME BUTTON */}

            <a
              href="/"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
            >
              Back to Home
            </a>

          </div>

          {/* ================= BOTTOM STATS ================= */}

          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            {/* BOX 1 */}

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="flex items-center justify-center gap-2 text-3xl font-extrabold text-yellow-500">

                <FaMobileAlt className="text-2xl" />

                Mobile

              </div>

              <p className="mt-2 text-sm text-gray-600">
                Digital-friendly interface
              </p>

            </div>

            {/* BOX 2 */}

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="text-3xl font-extrabold text-yellow-500">
                Simple
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Easy-to-understand information
              </p>

            </div>

            {/* BOX 3 */}

            <div className="rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-md shadow-gray-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">

              <div className="text-3xl font-extrabold text-yellow-500">
                Modern
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Contemporary digital experience
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DownloadHero;