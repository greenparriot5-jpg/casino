import {
  FaArrowRight,
  FaBookOpen,
  FaLayerGroup,
  FaLightbulb,
  FaHistory,
  FaMobileAlt,
} from "react-icons/fa";

function BlogPosts() {
  const posts = [
    {
      icon: <FaBookOpen />,
      category: "Beginner Guide",
      title: "A Beginner's Guide to Three-Card Games",
      text: "Learn the basic structure, terminology and common concepts used in traditional three-card card games.",
    },
    {
      icon: <FaLayerGroup />,
      category: "Card Knowledge",
      title: "Understanding Three-Card Hand Rankings",
      text: "Explore common hand combinations and understand how card-ranking concepts are generally organized.",
    },
    {
      icon: <FaHistory />,
      category: "Game History",
      title: "The Traditional Background of Teen Patti",
      text: "Discover the traditional roots and general cultural background associated with the Teen Patti format.",
    },
    {
      icon: <FaMobileAlt />,
      category: "Digital Gaming",
      title: "Traditional Cards in a Digital World",
      text: "Learn how traditional card-game concepts can be presented through modern digital interfaces.",
    },
    {
      icon: <FaLightbulb />,
      category: "Game Insights",
      title: "Important Card-Game Terminology",
      text: "Get familiar with common terms used when discussing three-card games and their different combinations.",
    },
    {
      icon: <FaBookOpen />,
      category: "Game Guide",
      title: "How Three-Card Game Formats Work",
      text: "Understand the general flow of a three-card format and the concepts behind comparing different hands.",
    },
  ];

  return (
    <section
      id="blog-posts"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-700">
            <FaBookOpen />
            Latest Articles
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Our
            <span className="text-yellow-500"> Latest Posts</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Discover useful articles and general information about
            three-card games, terminology, formats and digital experiences.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-500/10"
            >

              {/* Card Glow */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              {/* Number */}
              <div className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-yellow-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl text-yellow-400 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 group-hover:shadow-yellow-400/30">
                {post.icon}
              </div>

              {/* Category */}
              <div className="relative mt-6">
                <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-5 text-xl font-extrabold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-yellow-600">
                {post.title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-7 text-slate-600">
                {post.text}
              </p>

              {/* Read More */}
              <div className="relative mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm font-bold text-slate-900">
                  Read Article
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center shadow-2xl sm:p-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl text-slate-950 shadow-lg shadow-yellow-400/20">
            <FaBookOpen />
          </div>

          <h3 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
            Keep Learning About Card Games
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore our informational content to learn more about card
            formats, terminology, traditional concepts and modern digital
            interfaces.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-yellow-400" />

        </div>

      </div>
    </section>
  );
}

export default BlogPosts;