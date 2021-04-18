/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui"

const Gif = (props) => {
    const { src } = props;

    return (
        <figure
            sx={{
                textAlign: `center`
            }}
        >
            <img 
                sx={{
                    width: `50%`,
                    '@media screen and (max-width: 768px)': {
                        width: '100%',
                    },
                }}
                src={src}
            />
        </figure>
    )
}

export default Gif;