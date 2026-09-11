function AboutContent() {
  return (
    <section
      id="about-content"
      className="bg-gray-200 py-14 text-slate-900 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            About Us
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            About Teen Patti Gold
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Get a clear overview of the game format, traditional background,
            digital experience and common concepts related to Teen Patti Gold.
          </p>
        </div>

        {/* Main Content */}
        <div className="mx-auto mt-10 max-w-5xl space-y-6 text-base leading-8 text-slate-600">

          <p>
            Teen Patti Gold is presented as a digital card-game experience
            inspired by the traditional three-card Teen Patti format. The
            digital experience can combine a familiar card-game structure with
            a modern interface and interactive design.
          </p>

          <p>
            Three-card games are generally centered around comparing different
            card combinations according to an established ranking system.
            Different digital versions may include their own interface,
            features, tables and game configurations.
          </p>

          <p>
            Our goal with this website is to provide clear and organized
            informational content about the game format, terminology, general
            features and other useful details in one place.
          </p>

        </div>

        {/* Overview Article */}
        <article className="mt-12 rounded-3xl border border-slate-300 bg-white p-7 shadow-sm sm:p-9 lg:p-10">

          <div className="border-l-4 border-yellow-400 pl-5">
            <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
              Game Overview
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Understanding Teen Patti Gold
            </h3>
          </div>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">

            <p>
              Teen Patti is traditionally known as a three-card game where
              players receive three cards and compare their combinations based
              on a defined ranking structure. Its simple card format makes the
              basic concept easy to understand while allowing different
              variations and playing styles.
            </p>

            <p>
              A modern digital Teen Patti Gold experience can present these
              familiar concepts through a structured interface, organized game
              areas and interactive features. The exact design and available
              options can vary between different digital implementations.
            </p>

            <p>
              Understanding the basic card format, hand rankings and commonly
              used terminology can make it easier for newcomers to follow the
              general flow of a three-card game. This website brings these
              concepts together in a simple and organized format.
            </p>

          </div>

          {/* Overview Points */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-gray-50 p-5">
              <h4 className="font-bold text-slate-900">
                Three-Card Format
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The traditional format revolves around three cards for each
                hand.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gray-50 p-5">
              <h4 className="font-bold text-slate-900">
                Hand Rankings
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Different card combinations are compared using an established
                ranking structure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gray-50 p-5">
              <h4 className="font-bold text-slate-900">
                Digital Interface
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Modern versions can organize traditional concepts through
                interactive digital interfaces.
              </p>
            </div>

          </div>

        </article>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-300 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">

            <div className="mb-4 h-1 w-12 rounded-full bg-yellow-400" />

            <h3 className="text-xl font-bold text-slate-900">
              Simple Information
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Learn about the basic format, card structure and terminology
              associated with three-card games and Teen Patti Gold.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-300 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">

            <div className="mb-4 h-1 w-12 rounded-full bg-yellow-400" />

            <h3 className="text-xl font-bold text-slate-900">
              Modern Experience
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Explore how traditional card-game concepts can be presented
              through modern digital interfaces and organized game layouts.
            </p>

          </div>

        </div>

        {/* Bottom Information Box */}
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-6 text-center shadow-sm sm:p-8">

          <h3 className="text-xl font-extrabold text-slate-900">
            Explore Teen Patti Gold
          </h3>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-600">
            Discover more information about card rankings, game terminology,
            traditional concepts and modern digital card-game experiences
            through the different sections of this website.
          </p>

        </div>

      </div>
    </section>
  );
}

export default AboutContent;