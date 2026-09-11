import { Link } from "react-router-dom";
import {
  FaDownload,
  FaMobileAlt,
  FaLayerGroup,
  FaShieldAlt,
  FaGamepad,
} from "react-icons/fa";

function HeroSection() {
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

            {/* IMAGE DOWNLOAD */}
           <a
  href="https://teenpattigold99.com?from_gameid=8756858&channelCode=100000"
  download
  className="block"
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
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

          {/* DOWNLOAD BUTTON */}
         <a
  href="https://teenpattigold99.com?from_gameid=8756858&channelCode=100000"
  download
  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-md shadow-yellow-200 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg"
>
  <FaDownload />
  Download Now
</a>

        </div>

      </div>

      {/* ================= PREMIUM TEEN PATTI GOLD ARTICLE ================= */}
      <article className="border-t border-slate-300 bg-gray-200">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

          {/* ================= HEADER ================= */}
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
              About Teen Patti Gold
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Play. Learn. Explore.
              <span className="block text-yellow-500">
                The Teen Patti Gold Experience
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Welcome to Teen Patti Gold, a modern digital gaming experience
              designed with simple navigation, useful information and an
              easy-to-understand interface for visitors.
            </p>

          </div>

          {/* ================= MAIN ARTICLE CARD ================= */}
          <div className="mx-auto mt-12 max-w-5xl">

            <div className="rounded-3xl border border-slate-300 bg-white p-7 shadow-lg shadow-slate-300/40 sm:p-10 lg:p-12">

              {/* ================= INTRO ================= */}
              <section>

                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Welcome to Teen Patti Gold
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Teen Patti Gold brings the familiar three-card game format
                  into a modern digital environment. Our website is designed to
                  provide visitors with useful information about the game,
                  basic gameplay, card rankings, terminology and important
                  features in one convenient place.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Whether you are discovering Teen Patti Gold for the first time
                  or already understand the basic format, our goal is to keep
                  the experience simple, clear and easy to explore.
                </p>

              </section>

              {/* ================= HOW TO PLAY ================= */}
              <section className="mt-10 border-t border-slate-200 pt-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  How It Works
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  How to Play Teen Patti Gold
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Learning Teen Patti Gold starts with understanding the basic
                  three-card format. Players receive cards and the hands are
                  compared according to the applicable rules and rankings.
                  Understanding the game flow makes it easier for new visitors
                  to follow each round.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {/* STEP 1 */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-extrabold text-slate-900">
                      1
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      Learn the Basics
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Understand the basic rules, card values and terminology
                      used throughout the Teen Patti Gold experience.
                    </p>

                  </div>

                  {/* STEP 2 */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-extrabold text-slate-900">
                      2
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      Follow the Game
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Follow the round and understand how cards, hands and
                      different game actions work together.
                    </p>

                  </div>

                  {/* STEP 3 */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-extrabold text-slate-900">
                      3
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      Understand Results
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Learn how different card combinations are compared and
                      how the result of a round is determined.
                    </p>

                  </div>

                </div>

              </section>

              {/* ================= WINNING ================= */}
              <section className="mt-10 border-t border-slate-200 pt-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Game Knowledge
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  How to Understand Winning in Teen Patti Gold
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  A good understanding of card rankings and game rules is
                  important when learning Teen Patti Gold. The outcome of a
                  round depends on the cards dealt and the rules being used.
                  There is no guaranteed strategy that can win every round,
                  so learning the game and understanding its rules should
                  always come first.
                </p>

                <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">

                  <h4 className="text-lg font-bold text-slate-900">
                    Learn Before You Play
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Understanding the basic rules, card rankings and game flow
                    can make the Teen Patti Gold experience easier to follow.
                  </p>

                </div>

              </section>

              {/* ================= EASY EXPERIENCE ================= */}
              <section className="mt-10 border-t border-slate-200 pt-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Simple Experience
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Easy to Explore, Easy to Understand
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Teen Patti Gold is presented with a clean and straightforward
                  interface. Visitors can move between different sections,
                  read useful guides and find information without dealing with
                  unnecessary complexity.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <h4 className="font-bold text-slate-900">
                      Simple Navigation
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Find important sections quickly through a clean website
                      structure.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <h4 className="font-bold text-slate-900">
                      Useful Guides
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Explore information about gameplay, cards and basic
                      terminology.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <h4 className="font-bold text-slate-900">
                      Modern Design
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Enjoy a modern layout created for comfortable browsing
                      across different devices.
                    </p>

                  </div>

                </div>

              </section>

              {/* ================= DAILY UPDATES ================= */}
              <section className="mt-10 border-t border-slate-200 pt-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Always Updated
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Fresh Teen Patti Gold Updates
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  We plan to keep our website updated with fresh information,
                  new articles, helpful guides and useful content related to
                  Teen Patti Gold. Visitors can return regularly to discover new
                  information and explore the latest updates.
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <h4 className="text-lg font-bold text-slate-900">
                        Check Back for New Content
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        New guides and articles can make it easier to discover
                        and understand different aspects of Teen Patti Gold.
                      </p>

                    </div>

                    <a
                      href="/blog"
                      className="inline-flex w-fit rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-900 transition duration-300 hover:bg-yellow-300"
                    >
                      Visit Blog
                    </a>

                  </div>

                </div>

              </section>

              {/* ================= WEBSITE PAGES ================= */}
              <section className="mt-10 border-t border-slate-200 pt-10">

                <div className="text-center">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                    Explore Teen Patti Gold
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Explore Our Website
                  </h3>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    Explore every section of our website to learn more about
                    Teen Patti Gold, read fresh articles and find useful
                    information.
                  </p>

                </div>

                {/* ================= PAGE CARDS ================= */}
                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                  <a
                    href="/"
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
                  >
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600">
                      Home
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Explore our homepage
                    </p>
                  </a>

                  <a
                    href="/about"
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
                  >
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600">
                      About Us
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Learn more about us
                    </p>
                  </a>

                  <a
                    href="/blog"
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
                  >
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600">
                      Blog
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Read our latest articles
                    </p>
                  </a>

                  <a
                    href="/download"
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
                  >
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600">
                      Download
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Visit the download page
                    </p>
                  </a>

                  <a
                    href="/contact"
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
                  >
                    <h4 className="font-bold text-slate-900 group-hover:text-yellow-600">
                      Contact Us
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Get in touch with us
                    </p>
                  </a>

                </div>

              </section>

              {/* ================= FINAL CTA ================= */}
              <section className="mt-10 rounded-3xl bg-slate-900 px-6 py-9 text-center shadow-xl sm:px-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Teen Patti Gold
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Play. Learn. Explore. Enjoy.
                </h3>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Discover the world of Teen Patti Gold through useful guides,
                  fresh content and a simple modern website experience.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">

                  <a
                    href="/about"
                    className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-900 transition duration-300 hover:bg-yellow-300"
                  >
                    About Us
                  </a>

                  <a
                    href="/blog"
                    className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-white/10"
                  >
                    Read Blog
                  </a>

                  <a
                    href="/contact"
                    className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-white/10"
                  >
                    Contact Us
                  </a>

                </div>

              </section>

            </div>

          </div>

        </div>

      </article>

      {/* ================= FOUR FEATURE BOXES ================= */}
      <section className="bg-gray-200 px-6 py-12 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* BOX 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md">

              <FaMobileAlt className="mx-auto text-3xl text-yellow-500" />

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Mobile Friendly
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A responsive interface designed for comfortable viewing on
                mobile devices.
              </p>

            </div>

            {/* BOX 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md">

              <FaLayerGroup className="mx-auto text-3xl text-yellow-500" />

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Easy Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Organized content helps visitors quickly understand the game
                and its features.
              </p>

            </div>

            {/* BOX 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md">

              <FaShieldAlt className="mx-auto text-3xl text-yellow-500" />

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Clear Guides
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Helpful information about card rankings, terminology and game
                basics.
              </p>

            </div>

            {/* BOX 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md">

              <FaGamepad className="mx-auto text-3xl text-yellow-500" />

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Modern Experience
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A clean and modern presentation built around a three-card game
                experience.
              </p>

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default HeroSection;