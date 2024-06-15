import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
export default function Seo({ title, url }) {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta */}
      <meta name="theme-color" content="#101626" />
      <meta name="author" content="Muhammad-Osama" />
      <meta
        name="description"
        content="Passionate front-end developer creating modern, user-friendly web experiences. Specializing in responsive design, clean code, and bringing ideas to life with code magic. Explore my portfolio for a showcase of innovative projects and a glimpse into my coding journey."
      />
      <meta
        name="keywords"
        content="frontend, web development, JavaScript, React, UI/UX, responsive design"
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Passionate front-end developer creating modern, user-friendly web experiences. Specializing in responsive design, clean code, and bringing ideas to life with code magic. Explore my portfolio for a showcase of innovative projects and a glimpse into my coding journey."
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/zhk1rnZ/Web-capture-30-11-2023-5175-localhost.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="639" />
      <meta property="og:image:height" content="335" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="https://i.ibb.co/zhk1rnZ/Web-capture-30-11-2023-5175-localhost.jpg"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Passionate front-end developer creating modern, user-friendly web experiences. Specializing in responsive design, clean code, and bringing ideas to life with code magic. Explore my portfolio for a showcase of innovative projects and a glimpse into my coding journey."
      />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/zhk1rnZ/Web-capture-30-11-2023-5175-localhost.jpg"
      />
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
