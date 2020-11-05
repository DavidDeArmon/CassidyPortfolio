import React from 'react'
import Helmet from 'react-helmet'
import Main from '../components/Main'
import Template from '../components/Template'

class HomeIndex extends React.Component {
  
    render() {
        const siteTitle = "Cass Takes Photos"
        const siteDescription = "Cassidy Smith's Portolio"
        return (
            <Template>
                <Helmet>
                    <html lang="en"></html>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription}/>
                </Helmet>
                <Main />
            </Template>
        )
    }
}

export default HomeIndex