import React from 'react'
import Helmet from 'react-helmet'

import Main from '../components/Main'
import Layout from '../components/layout'
import Modals from '../components/Modals'


class HomeIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            lightboxIsOpen: false,
            modalToOpen:''
        };
    }
    openModal = (modalToOpen) => {
        this.setState({ modalIsOpen: true, modalToOpen });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    render() {
        const siteTitle = "Cassidy's Portolio"
        const siteDescription = "Cassidy Smith's Portolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <Main openModal={this.openModal} toggleLightbox={this.toggleLightbox}  />
                <Modals modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modal={this.state.modalToOpen}/>
            </Layout>
        )
    }
}

export default HomeIndex