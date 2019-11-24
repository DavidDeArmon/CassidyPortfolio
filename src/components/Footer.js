import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a target = "_blank"href="https://www.instagram.com/cass_takes_photos/" className="icon fa-instagram"><span className="label">instagram</span></a></li>
                        <li><a target = "_blank"href="https://www.youtube.com/channel/UCEC9Sp9SMXXJaGSB49k4Z9w" className="icon fa-youtube"><span className="label">youtube</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Cassidy Smith</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
