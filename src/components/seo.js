import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.png"

function SEO({ description, lang, meta, title, pathname }) {
  const data = useStaticQuery(
    graphql`
      query {
        info: site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: { eq: "oglogo.png" }) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || data.info.siteMetadata.description
  const ogImage = `${data.info.siteMetadata.siteUrl}${
    data.ogImageDefault.childImageSharp.fixed.src || logo
  }`
  const metaImageExt = ogImage.substr(ogImage.lastIndexOf(".") + 1)
  const metaUrl = `${data.info.siteMetadata.siteUrl}${pathname || ""}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.info.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          property: `og:title`,
          content: data.info.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:site_name",
          content: data.info.siteMetadata.title,
        },
        {
          property: "og:url",
          content: metaUrl,
        },
        {
          property: `og:image:type`,
          content: metaImageExt,
        },
        {
          property: `og:image:height`,
          content: "630",
        },
        {
          property: `og:image:width`,
          content: "1200",
        },
        {
          property: `og:image:secure_url`,
          content: ogImage,
        },
        {
          property: "twitter:image",
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: data.info.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: data.info.siteMetadata.description,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `r-wfNpcFw5suzgHkr2nEm6Ni7UgLr4Ol7HMtaeaaCSA`,
        },
      ].concat({
        name: "keywords",
        content: meta.join(", "),
      })}
    >
      <script type="application/ld+json">
        "@context": "https://schema.org", "@type": "Organization", "name": "VIT
        Animation Club", "url": "http://vitanimationclub.tech", "logo":
        "https://vitanimationclub.tech/static/a6a87e6874dbb825c326d357c1b2a5dc/3b869/oglogo.png",
        "sameAs": [ "https://www.facebook.com/vitanimationclub",
        "https://www.instagram.com/vit_animation/",
        "https://www.youtube.com/channel/UCv6jdaXdcxnaoqKvmFC3epw",
        "https://www.linkedin.com/company/vit-animation" ]
      </script>
    </Helmet>
  )
}
// meta && meta.length > 0
//           ? {
//               name: "keywords",
//               content: meta.join(`, `),
//             }
//           : []

SEO.defaultProps = {
  lang: `en`,
  meta: [
    "vit animation club",
    "vit clubs",
    "vit vellore",
    "vac",
    "photoshop photo editing",
    "photoshop background",
    "2d animation",
    "3d animation",
  ],
  description: `VIT Animation Club is a vitans driven club. We deal with various softwares such as Photoshop, Illustrator, Premiere Pro, After Effects, Maya, Blender etc. A picture is worth a thousand words, an ANIMATION is worth a thousand pictures`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
}

export default SEO
