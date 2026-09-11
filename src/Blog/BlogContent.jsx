import {
  FaBookOpen,
  FaLayerGroup,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

function BlogContent() {
  const topics = [
    {
      icon: <FaBookOpen />,
      title: "Teen Patti Basics",
      text: "Understand the basic structure, terminology and concepts behind the traditional three-card format.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Card Rankings",
      text: "Learn about common three-card combinations and how different hand categories are generally understood.",
    },
    {
      icon: <FaLightbulb />,
      title: "Game Insights",
      text: "Explore useful information about digital card-game interfaces, features and general gameplay concepts.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-yellow-600">
            Our Articles
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Learn More About
            <span className="text-yellow-500"> Three-Card Games</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Read informative articles covering the history, format,
            terminology and general characteristics of three-card games.
          </p>
        </div>

        {/* Featured Article */}
        <article className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl">
          <div className="p-8 sm:p-10 lg:p-12">

            <span className="inline-flex rounded-full bg-yellow-400/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-700">
              Featured Article
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Understanding the Traditional Three-Card Game Format
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Three-card games have a long-standing presence in card-game
              culture, particularly through the traditional Teen Patti format.
              The basic concept is centered around receiving three cards and
              evaluating the resulting hand according to an established set of
              rankings.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Modern digital versions can bring this familiar format to an
              interactive interface. Depending on the specific implementation,
              users may encounter digital tables, player information,
              animations, menus and different game configurations.
            </p>

            <h3 className="mt-9 text-xl font-bold text-slate-900 sm:text-2xl">
              Why Is the Three-Card Format Popular?
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-600">
              One reason for the popularity of the format is its relatively
              simple structure. A hand contains only three cards, making the
              basic concept easy to understand while still allowing several
              different combinations and rankings.
            </p>

            <h3 className="mt-9 text-xl font-bold text-slate-900 sm:text-2xl">
              Understanding Hand Combinations
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Common terminology associated with Teen Patti can include
              three-of-a-kind, sequence, color, pair and high card. The exact
              ranking order and rules should always be checked against the
              specific version being played because digital implementations
              may differ.
            </p>

          </div>
        </article>

        {/* Topic Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {topics.map((topic, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl text-yellow-400 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950">
                {topic.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-yellow-600">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {topic.text}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-yellow-600">
                Read Topic
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}

        </div>

        {/* Information Section */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg sm:p-10">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Digital Card-Game Experience
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Digital card games can combine traditional rules with modern
              interfaces. A well-designed interface may organize cards,
              tables, player information and controls in a clear and
              accessible way.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Features can vary significantly between applications and
              platforms, so users should review the information and rules
              provided by the specific version they are using.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
            <h2 className="text-2xl font-extrabold">
              Explore More Topics
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Continue exploring our blog for general information about
              three-card formats, card rankings, terminology and digital
              gaming interfaces.
            </p>

            <div className="mt-7 h-1 w-20 rounded-full bg-yellow-400" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default BlogContent;