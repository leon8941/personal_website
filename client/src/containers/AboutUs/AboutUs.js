import React, { Component } from 'react';

import Layout from '../../components/Layout/Layout'
import ContentBuilder from './ContentBuilder/ContentBuilder'

class AboutUs extends Component {
    render() {
        return(
            <Layout>
                <ContentBuilder />
            </Layout>
        )
    }
}

export default AboutUs;