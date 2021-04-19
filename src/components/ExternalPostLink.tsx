/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

type ExternalLinkT = {
    url: string,
    name: string
}

const ExternalPostLink = (props: ExternalLinkT) => {
    const { url, name } = props;

    return (
        <TLink key={url} href={url} target="_blank" rel="noopener noreferrer" sx={{ variant: `links.primary` }}>
            {name ? name : url}
        </TLink>
    )
}

export default ExternalPostLink;