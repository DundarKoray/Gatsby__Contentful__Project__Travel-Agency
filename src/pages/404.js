import React from 'react';
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Banner from '../components/Banner/Banner'

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
            <header style={style}>
                <Banner title="Oops it's a dead end">
                    <Link className="btn-white" to="/">Back to home page</Link>
                </Banner>
            </header>
        </Layout>
    );
};

export default error;