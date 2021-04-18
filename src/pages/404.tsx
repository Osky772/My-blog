import React from "react";
import { jsx } from "theme-ui"
import Text404 from "../@lekoarts/gatsby-theme-minimal-blog/texts/404.mdx";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

export default function Page404() {
    return (
        <Layout>
            <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
                <Text404 />
            </section>
        </Layout>
    )
}