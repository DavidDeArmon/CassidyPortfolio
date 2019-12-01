import React from 'react'
import EmailForm from './Email'
import avatar from '../assets/images/avatar2.jpg'



function Main(props) {
    return (
        <div id="main">

            <section id="one">
                <header className="major">
                    <h2>Cass Takes Photos</h2>
                </header>
                <div className ='avatar-container'>
                 <a href="/" className="image avatar"><img src={avatar} alt="avatar"/></a>
                 <h1 className="tagline"><strong>Hello</strong>, I'm Cassidy </h1>
                </div>
                <ul className="actions">
                    <li><button onClick={() => { props.openModal('about') }} className="button medium">Get To Know Me</button></li>
                    <li><button onClick={() => { props.openModal('recentWork') }} className="button medium">Gallery</button></li>
                    <li><button onClick={() => { props.openModal('pricing') }} className="button medium">Pricing</button></li>
                </ul>
            </section>
            <section id="two">
            <h2>Get In Touch</h2>
                <EmailForm/>
            </section>
        </div>
    )
}
export default Main