import { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact-content"
      aria-labelledby="contact-form-title"
      className="bg-gray-200 py-16 sm:py-20 lg:py-2 "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Content Introduction */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-300 bg-white p-7 shadow-md sm:p-10">
            <h2
              id="contact-form-title"
              className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            >
              Contact Teen Patti Gold
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our contact page is available for visitors who want to ask a
              general question, provide website feedback, or request
              clarification about information published on Teen Patti Gold. You
              can contact us about Teen Patti gameplay, 3 Patti card rankings,
              download guidance, website articles, or other general topics
              covered on the site.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Before submitting a question, you may find the information you
              need in our
              <Link
                to="/blog"
                className="mx-1 font-semibold text-yellow-700 hover:text-yellow-800"
              >
                Teen Patti Gold Blog
              </Link>
              or on the
              <Link
                to="/about"
                className="mx-1 font-semibold text-yellow-700 hover:text-yellow-800"
              >
                About Teen Patti Gold
              </Link>
              page. Visitors interested in installation information can also
              review our
              <Link
                to="/download"
                className="mx-1 font-semibold text-yellow-700 hover:text-yellow-800"
              >
                Teen Patti Gold Download
              </Link>
              page.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                Contact Form
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Send Your Question or Feedback
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Complete the form below with your name, email address, subject,
                and message. Clear information helps us understand your question
                about Teen Patti Gold or the website.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700"
              >
                Your message has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your message subject"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={7}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20 sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Internal Links */}
            <nav
              aria-label="Related Teen Patti Gold pages"
              className="mt-12 border-t border-slate-200 pt-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Explore More Teen Patti Gold Information
              </h2>

              <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
                Continue exploring the website to learn about Teen Patti Gold, 3
                Patti gameplay, card rankings, download information, and useful
                guides.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link
                  to="/"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  Teen Patti Gold Home
                </Link>

                <Link
                  to="/about"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  About Teen Patti Gold
                </Link>

                <Link
                  to="/blog"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  Teen Patti Gold Blog
                </Link>

                <Link
                  to="/download"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
                >
                  Teen Patti Gold Download
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Additional SEO Content */}
        <article className="mx-auto mt-12 max-w-5xl rounded-3xl border border-slate-300 bg-white p-7 shadow-md sm:p-10">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Teen Patti Gold Game Information
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Teen Patti Gold is associated with the traditional three-card Teen
            Patti format, also known as 3 Patti. Visitors can use this website
            to learn about general gameplay concepts, common card rankings,
            terminology, download considerations, and other information related
            to digital Teen Patti.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            People searching for Teen Patti game information in Pakistan or Teen
            Patti game download information should always check the
            availability, rules, age requirements, and applicable local
            requirements before using any digital gaming service. Information
            and features can change between application versions and regions.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our website focuses on providing clear and organized information
            rather than promising guaranteed results. If you are new to 3 Patti,
            start with the basic rules and card rankings before exploring
            additional game information.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-lg bg-yellow-100 px-4 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-200"
            >
              Learn About 3 Patti
            </Link>

            <Link
              to="/blog"
              className="rounded-lg bg-yellow-100 px-4 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-200"
            >
              Read Teen Patti Guides
            </Link>

            <Link
              to="/download"
              className="rounded-lg bg-yellow-100 px-4 py-2 font-semibold text-yellow-800 transition hover:bg-yellow-200"
            >
              View Download Guide
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ContactForm;
