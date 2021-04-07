/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" sx={{ variant: `links.secondary` }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks