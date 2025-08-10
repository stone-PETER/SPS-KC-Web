import { Helmet } from "react-helmet-async";
import {
  SITE_CONFIG,
  getFullUrl,
  getFullImageUrl,
} from "../../config/siteConfig";

const SEO = ({
  title = SITE_CONFIG.SITE_TITLE,
  description = SITE_CONFIG.DEFAULT_DESCRIPTION,
  keywords = SITE_CONFIG.DEFAULT_KEYWORDS,
  image = getFullImageUrl(SITE_CONFIG.DEFAULT_OG_IMAGE),
  url = getFullUrl(),
  type = "website",
}) => {
  const fullTitle =
    title === SITE_CONFIG.SITE_NAME
      ? title
      : `${title} | ${SITE_CONFIG.SITE_NAME}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
