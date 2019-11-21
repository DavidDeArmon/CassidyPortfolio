import React from 'react'



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
            </section>
            <section id="three">
                <h2>Get In Touch</h2>
                <div className="12u$(small)">
                    <form method="post" action="#">
                        <div className="row uniform 50%">
                            <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                            <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                            <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        </div>
                    </form>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Main