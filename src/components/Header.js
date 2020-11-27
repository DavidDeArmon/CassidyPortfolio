import React from 'react'
import Footer from './Footer'
import BG1 from '../assets/images/background/background1.jpg'
import BG2 from '../assets/images/background/background2.jpg'
import BG3 from '../assets/images/background/background3.jpg'
import BG4 from '../assets/images/background/background4.jpg'
// import BG5 from '../assets/images/background/background5.jpg'
// import BG6 from '../assets/images/background/background6.jpg'
import BG7 from '../assets/images/background/background7.jpg'
import BG8 from '../assets/images/background/background8.jpg'
import BG9 from '../assets/images/background/background9.jpg'
import BG10 from '../assets/images/background/background10.jpg'
import BG11 from '../assets/images/background/background11.jpg'
import BG12 from '../assets/images/background/background12.jpg'
import BG13 from '../assets/images/background/background13.jpg'

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            currentIMG: 0, 
            backgroundImages:[BG1, BG2, BG3,BG4,BG7,BG8,BG9,BG10,BG11,BG12,BG13]
        };
        this.changeImage = this.changeImage.bind();
      }
      componentDidMount(){
        this.timer = setInterval(() => {
            this.changeImage();
          }, 5000);
      }
      componentWillUnmount() {
        clearInterval(this.timer);
      }
      changeImage=()=>{
        if(this.state.currentIMG === this.state.backgroundImages.length -  1){
            this.setState({currentIMG: 0})
        }else{
            this.setState({currentIMG: this.state.currentIMG + 1})
        }
      }
    render() {

        return (
            <header id="back_ground" style={{ backgroundImage: "url('images/overlay.png'), url(" + this.state.backgroundImages[this.state.currentIMG] + ")"}}>
            {/* /<header id="back_ground" > */}
                <Footer />
            </header>
        )
    }
}


export default Header