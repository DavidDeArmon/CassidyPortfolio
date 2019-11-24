import React from 'react'
import EmailForm from './Email'



function Main(props) {
    return (
        <div id="main">

            <section id="one">
                <header className="major">
                    <h2>Cass Takes Photos</h2>
                </header>
                <ul className="actions">
                    <li><button onClick={() => { props.openModal('about') }} className="button medium">About</button></li>
                    <li><button onClick={() => { props.openModal('pricing') }} className="button medium">Pricing</button></li>
                    <li><button onClick={() => { props.openModal('recentWork') }} className="button medium">Gallery</button></li>
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