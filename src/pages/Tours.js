import React, { Component } from 'react';
import Layout from '../components/Layout'
import Header from '../examples/Header'
import RegularHeader from '../examples/RegularHeader'

class tours extends Component {
    render() {
        return (
            <Layout>
                <Header />
                <RegularHeader />
            </Layout>
        );
    }
}

export default tours;