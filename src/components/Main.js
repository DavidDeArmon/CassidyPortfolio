import React from 'react'
import EmailForm from './Emailform'
import avatar from '../assets/images/avatar2.jpg'
import Modals from '../components/Modals'



class Main extends React.Component {
    // TODO
    // 1:add correct images to Gallery
    // 2.make background change photo
    //IDEAS
    //make insta/youtube more prominent
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            lightboxIsOpen: false,
            modalToOpen: ''
        };
    }
    openModal = (modalToOpen) => {
        this.setState({ modalIsOpen: true, modalToOpen });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <div id="main">
                <section id="one">
                <Modals modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} modal={this.state.modalToOpen} /> 
                    <header className="major">
                        <h2>Cass Takes Photos</h2>
                    </header>
                    <div className='avatar-container'>
                        <img className="image avatar" src={avatar} alt="avatar" />
                        <h3 className="tagline">Hi, I’m Cassidy Smith and I am here to photograph your most precious moments in a unique way.</h3>
                    </div>
                    <ul className="actions">
                        <li><button onClick={() => { this.openModal('recentWork') }} className="button medium main">Gallery</button></li>
                        <li><button onClick={() => { this.openModal('pricing') }} className="button medium main">Pricing</button></li>
                        <li><button onClick={() => { this.openModal('about') }} className="button medium main">Get To Know Me</button></li>
                        <li><button onClick={() => { this.openModal('reviews') }} className="button medium main">Reviews</button></li>
                    </ul>
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