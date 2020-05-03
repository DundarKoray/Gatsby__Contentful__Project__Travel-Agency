import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
    return (
        <Helmet htmlAttributes={{lang:'en'}} title={title}>
            <meta name="description" content={description} />

        </Helmet>
    );
};

export default SEO;