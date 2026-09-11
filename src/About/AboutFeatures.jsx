import {
  FaCrown,
  FaLayerGroup,
  FaUsers,
  FaMobileAlt,
  FaBolt,
  FaStar,
  FaGlobe,
} from "react-icons/fa";

function AboutFeatures() {
  const features = [
    {
      icon: <FaLayerGroup />,
      title: "Teen Patti Gold Card Rankings",
      text: "Understand the basic three-card hand rankings and how different card combinations are commonly compared in Teen Patti.",
    },
    {
      icon: <FaUsers />,
      title: "Teen Patti Gold Multiplayer",
      text: "Learn about the multiplayer concept, table-based interaction and how digital three-card game environments can be structured.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Teen Patti Gold Mobile Experience",
      text: "Explore how modern digital card-game interfaces can be presented across supported smartphones and mobile devices.",
    },
    {
      icon: <FaBolt />,
      title: "Teen Patti Gold Game Format",
      text: "Get a simple overview of the three-card format, hand structure and general flow associated with Teen Patti-style games.",
    },
    {
      icon: <FaStar />,
      title: "Teen Patti Gold Terminology",
      text: "Discover common card-game terms and concepts that can help new visitors understand Teen Patti-related information more easily.",
    },
    {
      icon: <FaCrown />,
      title: "Teen Patti Gold Features",
      text: "Explore the common characteristics of modern digital card-game platforms, including interfaces, tables and interactive features.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-200 py-14 text-slate-900 sm:py-16 lg:py-20">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700 shadow-sm">
            <FaCrown />
            Teen Patti Gold Features
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Key Features of
            <span className="text-yellow-500"> Teen Patti Gold</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore the main informational features, card concepts and digital
            characteristics associated with Teen Patti Gold in one organized
            place.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
            >

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-2xl transition duration-500 group-hover:bg-yellow-400/20" />

              {/* Index */}
              <span className="absolute right-6 top-5 text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-yellow-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl text-yellow-400 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-xl font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-7 text-slate-600">
                {feature.text}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>

        {/* Bottom Information Banner */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-300 bg-white p-7 shadow-sm sm:p-9">

          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-slate-950 shadow-md">
              <FaGlobe />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Teen Patti Gold Overview
              </h3>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                Learn about Teen Patti Gold through organized information
                covering card rankings, game format, terminology, multiplayer
                concepts and modern digital card-game experiences.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutFeatures;