import { useEffect } from "react";

function SEO({
  title,
  description,
  canonical,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6MN1lsuiVrFyTwATTQIGECVNxf3W6lnkYL00Z66PJiJj1DJU-2q_1nY&s=10",
}) {
  useEffect(() => {
    const siteName = "Teen Patti Gold";

    // Title
    document.title = title;

    // Helper for meta tags
    const setMeta = (attribute, value, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${value}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Description
    setMeta("name", "description", description);

    // Robots
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", siteName);

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonicalLink = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", canonical);

    return () => {
      // No cleanup required because the next page SEO
      // replaces the existing metadata.
    };
  }, [title, description, canonical, image]);

  return null;
}

export default SEO;