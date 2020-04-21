import React, { Component } from 'react';
import Layout from '../components/Layout'
import Button from '../examples/Button';

class tours extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <Button big color="red">first button</Button>
                    <Button color="yellow">second button</Button>
                </div>
            </Layout>
        );
    }
}

export default tours;