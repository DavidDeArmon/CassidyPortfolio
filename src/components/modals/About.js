import React from 'react'
import aboutOne from '../../assets/images/fulls/aboutOne.jpg'
import aboutTwo from '../../assets/images/fulls/aboutTwo.jpg'

function About() {
    return (
        <div id="box" className='about'>
            <h2>About</h2>
            <article >
                <img className="left" src={aboutOne} alt="Cassidy" />
                <p>Hi, I’m Cassidy Smith and I am here to photograph your most precious moments in a unique way. For me photography is more than just snapping a few shots and calling it good, photography is art, it’s a connection, its a story. I want to photograph your love in a way that’s tailored to you, I want to get to know you, I want to capture your love in such a way that you can feel it when you look back at your photos.<br />
                    <br />
                    I’m lucky enough to be working my dream job as a photographer! When Instagram first launched in 2010 I took my Ipod touch and started photographing and posting every interesting angel, beautiful scene, and unique view I could find. Since then photography has been an ever growing passion of mine. <br />
                </p><p><br />
                <img className="right" src={aboutTwo} alt="Cassidy" />
                    I love to capture candid moments of you and your true love, or you and your family laughing and enjoying each other's company. I love taking photos of seniors and missionaries as they document the moments before their next big adventure. I love, love, love weddings, the details, the intimate moments, the parties, the kisses, cake smashes and everything in between. <br />
                    <br />
                    I look forward to the fun we will have, the laughs we will share and the adventures our photoshoots will take us on! I am eternally grateful to those that have trusted me to take their photos and I can’t wait to take yours as well! <br />
                </p>
            </article>
        </div>
    )
}
export default About