import { Helmet } from "react-helmet-async";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Teen Patti Gold | Game Information & Support</title>

        <meta
          name="description"
          content="Contact Teen Patti Gold for general questions, website feedback, 3 Patti game information, download guidance, and useful support."
        />

        <link
          rel="canonical"
          href="https://teen3pattigold.net/contact"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Contact Teen Patti Gold | Game Information & Support"
        />

        <meta
          property="og:description"
          content="Contact Teen Patti Gold for general questions, website feedback, 3 Patti game information, download guidance, and useful support."
        />

        <meta
          property="og:url"
          content="https://teen3pattigold.net/contact"
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
          content="Contact Teen Patti Gold | Game Information & Support"
        />

        <meta
          name="twitter:description"
          content="Contact Teen Patti Gold for general questions, website feedback, 3 Patti game information, download guidance, and useful support."
        />
      </Helmet>

      <main>
        <ContactHero />
        <ContactForm />
      </main>
    </>
  );
}

export default Contact;