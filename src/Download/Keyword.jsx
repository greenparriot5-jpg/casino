import React from "react";

const Keyword = () => {
  const leftArticles = [
    "Teen Patti Gold Download",
    "Teen Patti Gold APK Download",
    "Teen Patti Gold Latest APK",
    "Teen Patti Gold Android Download",
    "3 Patti Gold Download",
    "Teen Patti Gold Free Download",
    "Teen Patti Gold Download for Pakistan",
  ];

  const rightArticles = [
    "Teen Patti Gold Old Version",
    "Teen Patti Gold Update Download",
    "Teen Patti Gold APK Installation",
    "Teen Patti Gold Mobile Download",
    "Teen Patti Gold APK Latest Update 2026",
    "Teen Patti Gold Download Problems",
    "Teen Patti Gold Safe Download Guide",
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Teen Patti Gold Download & APK Guide
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-700">
            Looking for the <strong>Teen Patti Gold APK</strong>? This page
            provides useful information about{" "}
            <strong>Teen Patti Gold APK Download</strong>, mobile access, and
            installation guidance. Visitors searching for{" "}
            <strong>Teen Patti Gold Download</strong> can learn about
            available platform options and supported devices. Users in Pakistan
            can explore information related to{" "}
            <strong>Teen Patti Gold APK Pakistan</strong> and{" "}
            <strong>Teen Patti Gold Download Pakistan</strong>. The page also
            covers the <strong>Teen Patti Gold Latest Version</strong>,{" "}
            <strong>Teen Patti Gold Latest APK</strong>, and{" "}
            <strong>Teen Patti Gold App Download</strong>. Visitors looking
            for <strong>Teen Patti Gold Game Download</strong> or{" "}
            <strong>Teen Patti Gold APK 2026</strong> can review the available
            information before accessing the platform.
          </p>

          {/* 14 Article Titles */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Left Side - 7 */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Teen Patti Gold Downloads
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
                Teen Patti Gold APK Topics
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