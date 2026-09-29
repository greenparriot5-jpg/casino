import React from "react";

const Keyword = () => {
  const leftArticles = [
    "Teen Patti Gold Latest Update 2026",
    "How to Play Teen Patti Gold",
    "Teen Patti Gold Card Ranking Guide",
    "Teen Patti Gold Joker Mode",
    "Teen Patti Gold AK47 Mode",
    "Teen Patti Gold Muflis Mode",
    "Teen Patti Gold Private Table Guide",
  ];

  const rightArticles = [
    "Teen Patti Gold Rummy Guide",
    "Teen Patti Gold Events and Challenges",
    "Teen Patti Gold for Android",
    "Teen Patti Gold Download Safety Tips",
    "Teen Patti Gold for PC",
    "Teen Patti Gold Problems and Fixes",
    "Teen Patti Gold Beginner Guide 2026",
  ];

  return (
    <section className="bg-gray-200 pb-10">
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Teen Patti Gold Guides and Gaming Information
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-700">
            Explore useful <strong>Teen Patti Gold</strong> information,
            gaming guides, and platform updates through our blog. Learn about
            the <strong>Teen Patti Gold Latest Version</strong>,{" "}
            <strong>Teen Patti Gold How to Play</strong>, account access,
            and <strong>Teen Patti Gold Login</strong> guidance. Visitors can
            also find information about{" "}
            <strong>Teen Patti Gold Register</strong>,
            <strong> Teen Patti Gold Withdrawal</strong>, and{" "}
            <strong>Teen Patti Gold Deposit</strong> topics. Our guides may
            also cover <strong>Teen Patti Gold EasyPaisa</strong> and{" "}
            <strong>Teen Patti Gold JazzCash</strong> information for users in
            Pakistan. Discover <strong>Teen Patti Gold Games</strong> and
            useful <strong>Teen Patti Gold Pakistan Guide</strong> content to
            better understand the platform and its features.
          </p>

          {/* 14 Article Titles */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Left Side - 7 */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Teen Patti Gold Guides
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