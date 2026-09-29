import React from "react";

const Keyword = () => {
  const leftArticles = [
    "Teen Patti Gold Support",
    "Teen Patti Gold Download Help",
    "Teen Patti Gold Installation Help",
    "Teen Patti Gold Update Help",
    "Teen Patti Gold Login Support",
    "Teen Patti Gold App Not Opening",
    "Teen Patti Gold Technical Support",
  ];

  const rightArticles = [
    "Teen Patti Gold Bug Report",
    "Teen Patti Gold Account Help",
    "Teen Patti Gold Android Support",
    "Teen Patti Gold Game Error",
    "Teen Patti Gold Feedback",
    "Teen Patti Gold Contact Support",
    "Teen Patti Gold FAQ Help",
  ];

  return (
    <section className="bg-gray-200 pb-10">
      <div className="mx-auto max-w-5xl">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Teen Patti Gold Contact & Support
          </h2>

          <p className="mt-4 text-base leading-8 text-gray-700">
            Need help with <strong>Teen Patti Gold</strong>? Our contact page
            provides useful information for visitors looking for{" "}
            <strong>Teen Patti Gold Contact</strong> and{" "}
            <strong>Teen Patti Gold Support</strong>. Users can find general
            guidance related to{" "}
            <strong>Teen Patti Gold Customer Support</strong>, account
            questions, and platform information. If you need{" "}
            <strong>Teen Patti Gold Help</strong> or general{" "}
            <strong>Teen Patti Gold Customer Service</strong>, this page can
            help you find the available contact options. Visitors in Pakistan
            can also explore <strong>Teen Patti Gold Pakistan Support</strong>.
            For further assistance, use the{" "}
            <strong>Teen Patti Gold Contact Us</strong> information,{" "}
            <strong>Teen Patti Gold Support Pakistan</strong>,{" "}
            <strong>Teen Patti Gold Help Center</strong>, and{" "}
            <strong>Teen Patti Gold Account Support</strong> resources.
          </p>

          {/* 14 Article Titles */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Left Side - 7 */}
            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Teen Patti Gold Support
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
                Teen Patti Gold Help Topics
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