import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";

function About() {
  return (
    <>
      <Helmet>
        <title>About Teen Patti Gold – 3 Patti Game Guide</title>

        <meta
          name="description"
          content="Learn about Teen Patti Gold, 3 Patti rules, card rankings, gameplay features, multiplayer options, download guidance and responsible gaming information."
        />

        <link
          rel="canonical"
          href="https://teen3pattigold.net/about"
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:title"
          content="About Teen Patti Gold – 3 Patti Game Guide"
        />

        <meta
          property="og:description"
          content="Learn about Teen Patti Gold, 3 Patti rules, card rankings, gameplay features, multiplayer options, download guidance and responsible gaming information."
        />

        <meta
          property="og:url"
          content="https://teen3pattigold.net/about"
        />

        <meta
          property="og:site_name"
          content="Teen Patti Gold"
        />

        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About Teen Patti Gold – 3 Patti Game Guide"
        />

        <meta
          name="twitter:description"
          content="Learn about Teen Patti Gold, 3 Patti rules, card rankings, gameplay features, multiplayer options, download guidance and responsible gaming information."
        />

        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
        />
      </Helmet>

      <main>
        <AboutHero />
        <AboutContent />
      </main>
    </>
  );
}

export default About;