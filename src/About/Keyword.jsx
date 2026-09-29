import React from "react";

const Keyword = () => {
  const leftArticles = [
    "What Is Teen Patti Gold?",
    "Teen Patti Gold Game Overview",
    "Teen Patti Gold History",
    "Teen Patti Gold and 3 Patti",
    "Teen Patti Gold Game Rules",
    "Teen Patti Gold Card Rankings",
    "Teen Patti Gold Multiplayer",
  ];

  const rightArticles = [
    "Teen Patti Gold Private Tables",
    "Teen Patti Gold Game Modes",
    "Teen Patti Gold Features Guide",
    "Teen Patti Gold Updates",
    "Teen Patti Gold Mobile Game",
    "Teen Patti Gold Pakistan Guide",
    "About Teen Patti Gold Online",
  ];

  return (
    <section className="bg-gray-200 pb-10">
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            About Teen Patti Gold
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-700">
            Learn more about <strong>Teen Patti Gold</strong>, a popular
            <strong> Teen Patti Gold Game</strong> designed for online card
            gaming enthusiasts. <strong>What is Teen Patti Gold</strong>?
            It is a mobile-friendly gaming platform featuring{" "}
            <strong>Teen Patti Gold Games</strong> and an easy-to-use{" "}
            <strong>Teen Patti Gold App</strong>. Players searching for{" "}
            <strong>Teen Patti Gold Pakistan</strong> can explore useful
            information about the platform, its{" "}
            <strong>Teen Patti Gold Features</strong>, and available gaming
            options. The platform also provides information about{" "}
            <strong>Teen Patti Gold Online</strong> gaming,{" "}
            <strong>3 Patti Gold Game</strong>, and the{" "}
            <strong>Teen Patti Gold Card Game</strong> for users interested in
            learning more about this popular card gaming experience.
          </p>

          {/* 14 Article Titles */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Left Side - 7 */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Teen Patti Gold Articles
              </h3>

              <div className="space-y-3">
                {leftArticles.map((article, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-3 text-base font-semibold text-gray-800"
                  >
                    {article}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - 7 */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Latest Teen Patti Topics
              </h3>

              <div className="space-y-3">
                {rightArticles.map((article, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-3 text-base font-semibold text-gray-800"
                  >
                    {article}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Keyword;