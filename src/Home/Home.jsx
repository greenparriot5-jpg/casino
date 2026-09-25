import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";

function Home() {
  const title = "Teen Patti Gold – 3 Patti Game in Pakistan";
  const description =
    "Learn about Teen Patti Gold, 3 Patti game rules, card rankings, Teen Patti game in Pakistan, download guidance, gameplay tips and useful information.";

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link
          rel="canonical"
          href="https://teen3pattigold.net/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content="https://teen3pattigold.net/"
        />
        <meta property="og:site_name" content="Teen Patti Gold" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
        />
        <meta property="og:image:alt" content="Teen Patti Gold game" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10"
        />
        <meta
          name="twitter:image:alt"
          content="Teen Patti Gold game"
        />

        {/* Website structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Teen Patti Gold",
            url: "https://teen3pattigold.net/",
            description,
          })}
        </script>
      </Helmet>

      <HeroSection />
      <ContentSection />
    </>
  );
}

export default Home;