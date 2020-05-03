import React from 'react';
import Layout from '../components/Layout'
// import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from '../components/Banner/Banner'
import SEO from '../components/SEO/SEO'

const error = () => {
    const style = {
        background: "#3fd0d4",
        minHeight: "calc(100vh - 62px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <Layout>
            <SEO title="Error" />
            <header style={style}>
                <Banner title="Oops it's a dead end">
                    <AniLink fade className="btn-white" to="/">Back to home page</AniLink>
                </Banner>
            </header>
        </Layout>
    );
};

export default error;