import {
  FaMobileAlt,
  FaLaptop,
  FaBolt,
  FaShieldAlt,
  FaGamepad,
  FaInfoCircle,
} from "react-icons/fa";

function DownloadContent() {
  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Explore a digital interface designed to work smoothly across modern mobile devices.",
    },
    {
      icon: <FaLaptop />,
      title: "Modern Interface",
      description:
        "A clean and organized interface makes it easier to understand different sections and features.",
    },
    {
      icon: <FaBolt />,
      title: "Smooth Experience",
      description:
        "Fast and responsive interactions can provide a more comfortable digital card-game experience.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Information",
      description:
        "Always review available information carefully and use trusted sources when accessing digital services.",
    },
    {
      icon: <FaGamepad />,
      title: "Game Experience",
      description:
        "Learn about the general structure, features and interface of modern three-card game experiences.",
    },
    {
      icon: <FaInfoCircle />,
      title: "Useful Details",
      description:
        "Find important information about supported devices, general requirements and getting started.",
    },
  ];

  return (
    <section
      id="download-content"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
            Getting Started
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the Digital Experience
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Before using any digital card-game service, it is useful to
            understand the platform, interface, supported devices and
            general information available to you.
          </p>
        </div>

        {/* Main Information */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
              About the Platform
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              A Modern Three-Card Game Interface
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Digital three-card game experiences can bring traditional
                card-game concepts into a modern interface. Depending on the
                platform, users may find different layouts, menus, features
                and game configurations.
              </p>

              <p>
                A responsive design can make the experience easier to explore
                on smartphones, tablets and other supported devices. It is
                always important to check the specific requirements of the
                platform you are using.
              </p>

              <p>
                For the best experience, review the available information,
                understand the platform features and make sure you are using
                an official and trusted source.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-xl text-slate-950">
                  <FaInfoCircle />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Important Information
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Availability, device compatibility and features may vary
                    between different digital platforms. Always check the
                    latest information before getting started.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-8 shadow-2xl sm:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-slate-950 shadow-lg shadow-yellow-400/20">
                <FaMobileAlt />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold text-white">
                Device Compatibility
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Modern digital experiences are commonly designed with
                responsive interfaces so users can explore them across
                supported screen sizes and devices.
              </p>

              {/* Points */}
              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Responsive mobile interface
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Modern digital layout
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Easy-to-understand navigation
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Platform information
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Features */}
        <div className="mt-20">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
              Features
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What You Can Explore
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-xl text-slate-950 shadow-lg shadow-yellow-400/20 transition duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default DownloadContent;