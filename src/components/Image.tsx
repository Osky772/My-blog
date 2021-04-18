/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui"

const Image = (props) => {
    const { src } = props;

    return (
        <figure
            sx={{
                textAlign: `center`
            }}
        >
            <img 
                sx={{
                    width: `100%`
                }}
                src={src}
            />
        </figure>
    )
}

export default Image;