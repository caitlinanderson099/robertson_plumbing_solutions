import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  author,
  image,
  url,
}) => {
  const defaultImage = image || "/default-og-image.jpg"; // Optional fallback

  return (
    <Helmet>
      {/* Page Title */}
      {title && <title>{title}</title>}

      {/* Main Tags */}
      {description && (
        <meta name="description" content={description} />
      )}

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {author && (
        <meta name="author" content={author} />
      )}

      {/* Canonical URL (important for SEO) */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  );
};

export default SEO;
