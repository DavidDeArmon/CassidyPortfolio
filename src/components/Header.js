import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar2.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar}/></a>
                    <h1><strong>Hello</strong>, I'm Cassidy<br />
                    Basic Utah photographer<br />
                    with some not so basic photos.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header