import {
  FaLayerGroup,
  FaUsers,
  FaCreditCard,
  FaTrophy,
  FaGamepad,
  FaMobileAlt,
  FaCrown,
  FaListOl,
  FaInfoCircle,
} from "react-icons/fa";

function GameSection() {
  const gameInfo = [
    {
      icon: <FaLayerGroup />,
      title: "Teen Patti Gold Friendly",
      text: "Teen Patti Gold offers a simple and familiar three-card game concept with an easy-to-understand structure for visitors exploring the game.",
    },
    {
      icon: <FaCreditCard />,
      title: "Teen Patti Gold Format",
      text: "Teen Patti Gold is based around three-card hands, where different card combinations are evaluated according to the applicable game rules.",
    },
    {
      icon: <FaUsers />,
      title: "Teen Patti Gold Multiplayer",
      text: "Teen Patti Gold can provide a multiplayer-style card-game environment where multiple players can participate in the same game experience.",
    },
    {
      icon: <FaTrophy />,
      title: "Teen Patti Gold Rankings",
      text: "Teen Patti Gold uses familiar three-card combinations and hand-ranking concepts that help players understand the overall card-game structure.",
    },
    {
      icon: <FaListOl />,
      title: "Teen Patti Gold Rules",
      text: "Teen Patti Gold follows a defined card-game format, while specific rules, features and available options can depend on the particular version.",
    },
    {
      icon: <FaGamepad />,
      title: "Teen Patti Gold Experience",
      text: "Teen Patti Gold can offer a modern digital card-game experience with organized tables, interactive elements and different available game options.",
    },
  ];

  return (
    <section
      id="game"
      className="bg-gray-200 py-16 text-slate-800 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-600">
            <FaCrown />
            Teen Patti Gold
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore
            <span className="text-yellow-500"> Teen Patti Gold</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Discover useful information about Teen Patti Gold, including
            its three-card format, game structure, features and overall
            digital card-game experience.
          </p>

        </div>

        {/* ================= SIX CARDS ================= */}
        <div className="mx-auto mt-14 max-w-6xl">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {gameInfo.map((item, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
              >

                {/* Small Top Decoration */}
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-yellow-400/5 transition-all duration-300 group-hover:bg-yellow-400/10" />

                {/* Number */}
                <div className="absolute right-5 top-5 text-sm font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-200 bg-yellow-50 text-xl text-yellow-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-900">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-xl font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
                  {item.title}
                </h3>

                {/* Article / Description */}
                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-10 bg-yellow-400/50 transition-all duration-500 group-hover:w-full group-hover:bg-yellow-400" />

              </article>
            ))}

          </div>

        </div>

        {/* ================= BOTTOM INFORMATION ================= */}
        <div className="mx-auto mt-14 max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-7 shadow-sm sm:p-9">

            {/* Background Decoration */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">

              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-slate-900 shadow-lg shadow-yellow-400/20">
                <FaInfoCircle />
              </div>

              {/* Content */}
              <div>

                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Learn More About Teen Patti Gold
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Teen Patti Gold is built around a three-card game format
                  with recognizable card combinations and an easy-to-follow
                  structure. Different versions can vary in their available
                  features, rules, interface, tables and supported platforms.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GameSection;