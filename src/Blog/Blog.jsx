import { Helmet } from "react-helmet-async";
import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";

function Blog() {
  return (
    <>
      <Helmet>
        <title>Teen Patti Gold Blog | 3 Patti Guides, Rules & Tips</title>
        <meta name="description" content="Explore Teen Patti Gold blog, 3 Patti rules, card rankings, gameplay basics, download guidance and responsible gaming information." />
        <link rel="canonical" href="https://teen3pattigold.net/blog" />
      </Helmet>
      
      <main>
        <BlogHero />
        <BlogContent />
      </main>
    </>
  );
}

export default Blog;