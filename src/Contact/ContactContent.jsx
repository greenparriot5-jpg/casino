import {
  FaEnvelope,
  FaComments,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa";

function ContactContent() {
  const contactCards = [
    {
      icon: <FaEnvelope />,
      title: "General Inquiries",
      description:
        "For general questions, website information or other basic inquiries, you can reach out through the contact options provided below.",
    },
    {
      icon: <FaComments />,
      title: "Feedback & Suggestions",
      description:
        "Your feedback can help improve the website experience. Share your suggestions, ideas or comments with our team.",
    },
    {
      icon: <FaInfoCircle />,
      title: "Game Information",
      description:
        "Learn more about three-card game formats, terminology, features and general information through our website resources.",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Need Help?",
      description:
        "If you have questions about the information available on this website, feel free to use the contact form to send us a message.",
    },
  ];

  return (
    <section
      id="contact-content"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Contact Information
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            We Would Love to Hear From You
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Whether you have a question, suggestion or simply want to learn
            more about the website, this section provides useful ways to get
            in touch and find relevant information.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:bg-white hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-xl text-slate-950 shadow-lg shadow-yellow-400/20 transition duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Information */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                Stay Connected
              </span>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Have Something to Share?
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                We value clear communication and useful feedback. Use the
                contact form to send your message and provide any relevant
                details about your question or suggestion.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              Send a Message
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactContent;