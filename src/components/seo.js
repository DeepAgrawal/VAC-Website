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
        ogImageDefault: file(relativePath: { eq: "logo.png" }) {
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
      ].concat({
        name: "keywords",
        content: meta.join(", "),
      })}
    />
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
    "photoshop photo editing",
    "photoshop background",
    "2d animation",
    "3d animation",
    "vit clubs",
    "vit teams",
    "vit animation",
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
