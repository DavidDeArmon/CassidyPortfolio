import React from 'react'
import EmailForm from './Emailform'
import Modals from '../components/Modals';


import avatar from '../assets/images/avatar2.webp'
import mainLogo from'../assets/images/website-icon.webp'
import maternity31 from '../assets/images/maternity/dannyPeyton (5).webp';
import bridal42 from '../assets/images/bridals/treyKyndell (21).webp';
import wedding88 from '../assets/images/weddings/kysonAshlee (32).webp'

class Main extends React.Component {
    // TODO
    //make insta/youtube more prominent
    //optimize images with gatsby-image
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            modalToOpen: '',
            openCategory:0,
            viewerIsOpen: false,
            selectedIndex: 0
        };
    }
    openModal = (modalToOpen) => {
        this.setState({ modalIsOpen: true, modalToOpen });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false, openCategory:0, viewerIsOpen:false });
    }
    openGalleryCategory = (openCategory) => {
        this.setState({openCategory})
    }
    closeGalleryCategory = () => {
        this.setState({openCategory:0})
    }
    toggleViewer = (id) => {
        this.setState(state => ({
            viewerIsOpen: !state.viewerIsOpen,
            selectedIndex: id,
            modalToOpen:'imageviewer'
        }));
    }

    render() {
        let {modalIsOpen,modalToOpen,openCategory,selectedIndex} = this.state
        return (
            <div id="main">
                <Modals modalIsOpen={modalIsOpen}  modal={modalToOpen} openCategory={openCategory} selectedIndex={selectedIndex} openGalleryCategory={this.openGalleryCategory} closeGalleryCategory={this.closeGalleryCategory} toggleViewer={this.toggleViewer} closeModal={this.closeModal}/>
                <section id="one">
                    <header className="major">
                        <img src={mainLogo} alt='camera'/>
                    </header>
                    <div className='avatar-container'>
                        <img className="image avatar" src={avatar} alt="avatar" />
                    </div>
                        <h3 className="tagline">Hi, I’m Cassidy Smith and I am here to photograph your most precious moments in a unique way. For me photography is more than just snapping a few shots and calling it good, photography is art, it’s a connection, its a story. I want to photograph your love in a way that’s tailored to you, I want to get to know you, I want to capture your love in such a way that you can feel it when you look back at your photos.</h3>
                    <ul className="actions">
                        <li><button onClick={() => { this.openModal('gallery') }} className="button medium main">Galleries</button></li>
                        <li><button onClick={() => { this.openModal('pricing') }} className="button medium main">Pricing</button></li>
                        <li><button onClick={() => { this.openModal('about') }} className="button medium main">Get To Know Me</button></li>
                        <li><button onClick={() => { this.openModal('reviews') }} className="button medium main">Reviews</button></li>
                    </ul>
                </section>
                <section id="one">
                    <img className="image mainimages" src={maternity31} alt='camera'/>
                    <img className="image mainimages" src={bridal42} alt='camera'/>
                    <img className="image mainimages" src={wedding88} alt='camera'/>
                </section>
                <section id="two">
                    <h2>Get In Touch</h2>
                    <EmailForm />
                </section>
            </div>
        )
    }
}
export default Main