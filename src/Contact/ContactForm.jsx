import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

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
      id="contact-form"
      className="bg-slate-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Contact Form
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Send Us a Message
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Fill out the form below with your details and message.
            Make sure the information you provide is clear and relevant.
          </p>
        </div>

        {/* Form Area */}
        <div className="mx-auto mt-14 max-w-4xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

            <form onSubmit={handleSubmit}>

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
                  >
                    <FaUser className="text-yellow-500" />
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
                  >
                    <FaEnvelope className="text-yellow-500" />
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
                >
                  <FaTag className="text-yellow-500" />
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
                  className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-800"
                >
                  <FaCommentDots className="text-yellow-500" />
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="7"
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-400/10"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-slate-950 hover:shadow-xl hover:shadow-yellow-400/20 sm:w-auto"
                >
                  Send Message

                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;