import React from "react";

const Keyword = () => {
  const leftArticles = [
    "Teen Patti Gold Online Game",
    "Teen Patti Gold Game in Pakistan",
    "3 Patti Online Game",
    "Teen Patti Gold Latest Version",
    "Teen Patti Gold Multiplayer Game",
    "Teen Patti Gold Features",
    "Teen Patti Gold Game Guide",
  ];

  const rightArticles = [
    "Teen Patti Gold Card Game",
    "Teen Patti Gold Online Play",
    "Teen Patti Gold 2026",
    "Teen Patti Gold Game Experience",
    "Best Teen Patti Gold Game",
    "Teen Patti Gold for Beginners",
    "Teen Patti Gold Online Pakistan",
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Teen Patti Gold Pakistan – Online Card Game
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-700">
            Teen Patti Gold is a popular <strong>Teen Patti Gold Game</strong>
            for players looking for an engaging online card gaming experience.
            The <strong>Teen Patti Gold App</strong> provides convenient mobile
            access, while <strong>Teen Patti Gold Online</strong> offers an easy
            way to explore the game. Players in Pakistan can learn more about
            <strong> Teen Patti Gold Pakistan</strong> and the latest platform
            features. The <strong>Teen Patti Gold Latest Version</strong> can
            provide updated features and improvements. Whether you search for
            <strong> 3 Patti Gold</strong>,{" "}
            <strong>Teen Patti Gold Card Game</strong>, or{" "}
            <strong>Teen Patti Gold Pakistan Game</strong>, this website
            provides useful information about the platform and its available
            gaming resources for 2026.
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