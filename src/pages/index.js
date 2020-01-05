import React from 'react'
import Helmet from 'react-helmet'
import Main from '../components/Main'
import Layout from '../components/Layout'


class HomeIndex extends React.Component {
    render() {
        const siteTitle = "Cass Takes Photos"
        const siteDescription = "Cassidy Smith's Portolio"
        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <Main />
            </Layout>
        )
    }
}

export default HomeIndex