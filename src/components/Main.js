import React from 'react'
import EmailForm from './Email'
import avatar from '../assets/images/avatar2.jpg'
import Modals from '../components/Modals'



class Main extends React.Component {
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
                        <h2 className="tagline"><strong>Hello</strong>, I'm Cassidy... </h2>
                    </div>
                    <ul className="actions">
                        <li><button onClick={() => { this.openModal('about') }} className="button medium">Get To Know Me</button></li>
                        <li><button onClick={() => { this.openModal('recentWork') }} className="button medium">Gallery</button></li>
                        <li><button onClick={() => { this.openModal('pricing') }} className="button medium">Pricing</button></li>
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