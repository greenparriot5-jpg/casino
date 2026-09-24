import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>Teen Patti Gold – Play 3 Patti Online</title>

        <meta
          name="description"
          content="Learn about Teen Patti Gold, 3 Patti gameplay, card rankings, game features, download information and useful guides."
        />

        <link
          rel="canonical"
          href="https://teen3pattigold.net/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Teen Patti Gold – Play 3 Patti Online"
        />

        <meta
          property="og:description"
          content="Learn about Teen Patti Gold, 3 Patti gameplay, card rankings, game features, download information and useful guides."
        />

        <meta
          property="og:url"
          content="https://teen3pattigold.net/"
        />

        <meta
          property="og:site_name"
          content="Teen Patti Gold"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Teen Patti Gold – Play 3 Patti Online"
        />

        <meta
          name="twitter:description"
          content="Learn about Teen Patti Gold, 3 Patti gameplay, card rankings, game features, download information and useful guides."
        />
      </Helmet>

      <HeroSection />
      <ContentSection />
    </>
  );
}

export default Home;