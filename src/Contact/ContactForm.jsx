import { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been submitted successfully!");

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
      className="bg-gray-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Contact Form
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Send a Message About Teen Patti Gold
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Use the form below to send a general question, suggestion, or
            feedback about our website and Teen Patti Gold information.
            Please provide clear and accurate details so your message is easy
            to understand.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-14 max-w-4xl">

          <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

            <form onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Name */}
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

                {/* Email */}
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
                  placeholder="Enter message subject"
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

            {/* Internal Navigation */}
            <div className="mt-10 border-t border-slate-200 pt-8">

              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Explore Teen Patti Gold
              </h2>

              <p className="mb-5 text-base leading-7 text-slate-600">
                Visit the other sections of our website to learn more about
                Teen Patti Gold, read related articles, or find download
                information.
              </p>

              <nav
                aria-label="Teen Patti Gold website navigation"
                className="flex flex-wrap gap-3"
              >

                <Link
                  to="/"
                  className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                >
                  About Teen Patti Gold
                </Link>

                <Link
                  to="/blog"
                  className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                >
                  Teen Patti Gold Blog
                </Link>

                <Link
                  to="/download"
                  className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
                >
                  Download Teen Patti Gold
                </Link>

              </nav>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;