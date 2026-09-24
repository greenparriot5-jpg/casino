import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section
      id="about-content"
      aria-labelledby="about-content-title"
      className="bg-gray-200 px-4 py-16"
    >
      <div className="mx-auto max-w-5xl">

        <article className="rounded-2xl bg-white p-6 leading-8 text-gray-700 shadow-md md:p-10">

          {/* Main Content Heading */}
          <h2
            id="about-content-title"
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            About Teen Patti Gold – A Modern 3 Patti Card Game Experience
          </h2>

          <p className="mb-5">
            Teen Patti Gold is designed for people who enjoy classic Indian
            card games and want to experience the familiar three-card format
            through a modern digital platform. Teen Patti, commonly called
            3 Patti, has been a popular card game for generations. Its simple
            format makes it easy for new players to understand while giving
            experienced players a familiar gameplay structure.
          </p>

          <p className="mb-5">
            The digital Teen Patti experience allows players to explore
            different tables, game options, and interactive features from
            supported mobile devices. The interface can make traditional
            card-game entertainment more convenient by presenting cards,
            player information, and available actions in a digital
            environment.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            Understanding the Teen Patti Game
          </h2>

          <p className="mb-5">
            Players who already understand traditional Teen Patti rules can
            usually become familiar with the basic digital format quickly.
            Beginners can start by learning the common card combinations and
            understanding how the cards are compared during a round. Learning
            the fundamentals first can make it easier to explore additional
            game options later.
          </p>

          <p className="mb-5">
            Traditional Teen Patti uses combinations such as Trail, Pure
            Sequence, Sequence, Colour, Pair, and High Card. Understanding
            these combinations gives new players a useful foundation for
            following a three-card game and learning the terminology commonly
            associated with 3 Patti.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            Multiplayer and Social Features
          </h2>

          <p className="mb-5">
            Multiplayer interaction is another part of the online Teen Patti
            experience. Players may be able to participate in available
            multiplayer tables and, depending on the current version and
            region, use social features or private rooms. Playing with friends
            can provide a more interactive experience than playing a
            completely offline card game.
          </p>

          <p className="mb-5">
            Available features can change as applications are updated.
            Performance can also depend on the device, internet connection,
            application version, and other technical factors. Users should
            always check the current application information for the latest
            available features.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            Teen Patti Gold Download and Safe Usage
          </h2>

          <p className="mb-5">
            Anyone searching for Teen Patti Gold download or Teen Patti Gold
            APK should pay attention to the source of the application.
            Official or recognized distribution channels are preferable to
            unknown websites offering modified APK files. Users should avoid
            applications that promise guaranteed results, unlimited benefits,
            or unauthorized features.
          </p>

          <p className="mb-5">
            Keeping applications updated and checking the source before
            installation are sensible steps when using any digital gaming
            application. Users should also avoid sharing passwords,
            verification codes, or other private account information with
            unknown people or websites.
          </p>

          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            Responsible Card-Game Entertainment
          </h2>

          <p className="mb-5">
            Teen Patti is a card game in which chance can influence the result
            of a hand. There is no guaranteed strategy that can predict every
            result. Players should treat the experience as entertainment,
            understand the applicable rules, follow age requirements, and
            avoid suspicious tools or services claiming to guarantee wins.
          </p>

          <p>
            Overall, Teen Patti Gold provides a digital interpretation of the
            familiar 3 Patti card-game format. Visitors can learn about the
            basic rules, card combinations, multiplayer experience, download
            considerations, and responsible usage before exploring the game.
            Our website provides organized information to help visitors
            understand these topics in one place.
          </p>

          {/* Internal Links */}
          <nav
            aria-label="Teen Patti Gold website navigation"
            className="mt-10 border-t border-gray-200 pt-8"
          >
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Explore Teen Patti Gold
            </h2>

            <div className="flex flex-wrap gap-3">

              <Link
                to="/"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Teen Patti Gold Home
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
                Teen Patti Gold Download
              </Link>

              <Link
                to="/contact"
                className="rounded-lg bg-gray-100 px-4 py-2 font-semibold text-gray-800 transition hover:bg-yellow-100"
              >
                Contact Teen Patti Gold
              </Link>

            </div>
          </nav>

        </article>
      </div>
    </section>
  );
};

export default AboutContent;