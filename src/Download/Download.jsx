import { Helmet } from "react-helmet-async";
import DownloadHero from "./DownloadHero";
import DownloadContent from "./DownloadContent";
import Keyword from "./Keyword";

function Download() {
  return (
    <>
      <Helmet>
        <title>Teen Patti Gold Download in Pakistan | 3 Patti Game</title>

        <meta
          name="description"
          content="Learn about Teen Patti Gold download in Pakistan, 3 Patti gameplay, installation steps, mobile compatibility, safe usage and online card-game information."
        />

        <link
          rel="canonical"
          href="https://teen3pattigold.net/download"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Teen Patti Gold Download in Pakistan | 3 Patti Game"
        />

        <meta
          property="og:description"
          content="Learn about Teen Patti Gold download in Pakistan, 3 Patti gameplay, installation steps, mobile compatibility and safe usage."
        />

        <meta
          property="og:url"
          content="https://teen3pattigold.net/download"
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
          content="Teen Patti Gold Download in Pakistan | 3 Patti Game"
        />

        <meta
          name="twitter:description"
          content="Teen Patti Gold download information, 3 Patti gameplay, installation guidance and online card-game information for users in Pakistan."
        />
      </Helmet>

      <main>
        <DownloadHero />
        <DownloadContent />
        <Keyword/>
      </main>
    </>
  );
}

export default Download;