import React from 'react'



function Main(props) {
    return (
        <div id="main">

            <section id="one">
                <header className="major">
                    <h2>Cass Takes Photos</h2>
                </header>
             
                <ul className="actions">
                    <li><button onClick={() => { props.openModal('about') }} className="button">About</button></li>
                    <li><button onClick={() => { props.openModal('pricing') }} className="button">Pricing</button></li>
                    <li><button onClick={() => { props.openModal('recentWork') }} className="button">Gallery</button></li>
                </ul>
            </section>

            <section id="three">
                <h2>Get In Touch</h2>
                <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                <div className="row">
                    <div className="8u 12u$(small)">
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
                    <div className="4u 12u$(small)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                1234 Somewhere Rd.<br />
                                Nashville, TN 00000<br />
                                United States
                                    </li>
                            <li>
                                <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                000-000-0000
                                    </li>
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <p href="#">Cassidy@untitled.tld</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Main