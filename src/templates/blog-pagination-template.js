import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from './blog-template.css';
import BlogCard from '../components/Blog/BlogCard';
import TitleStyled from '../components/TitleStyled'

const BlogPaginationTemplate = () => {
    return (
        <Layout>this is a BlogPagination template</Layout>
    );
};

export default BlogPaginationTemplate;