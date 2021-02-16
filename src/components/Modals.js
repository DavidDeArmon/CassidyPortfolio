import React from 'react'
import Modal from 'react-modal';
import GalleriesOne from './modals/GalleriesOne';
import About from './modals/About';
import Pricing from './modals/Pricing';
import Reviews from './modals/Reviews';
import { Carousel } from 'react-responsive-carousel';
import GalleriesTwo from '../components/modals/GalleriesTwo';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const customStyles = {
  content: {
    width:'70rem',
    maxWidth: '80vw',
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};


class Modals extends React.Component {
  constructor() {
    super()
    this.myRef = React.createRef('gatsby-noscript');
  }
  createCarousel(){
    let imgArr = GalleriesTwo(this.props.openCategory);
    let carouselImages = imgArr.map((pic) => {
        return (
            <div className='imageViewer' key={pic.id}>
                <img src={pic.source} alt={pic.caption} />
            </div>
        );
    });
    console.log(carouselImages)
    return carouselImages;
}
  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          {this.props.modal === 'about' && <About />}
          {this.props.modal === 'gallery' && <GalleriesOne openCategory={this.props.openCategory} openGalleryCategory={this.props.openGalleryCategory} closeGalleryCategory={this.props.closeGalleryCategory} toggleViewer={this.props.toggleViewer}/>}
          {this.props.modal === 'pricing' && <Pricing />}
          {this.props.modal === 'reviews' && <Reviews />}
          {this.props.modal === 'imageviewer' && <Carousel selectedItem={this.props.selectedIndex} showThumbs={true} showArrows={true} showIndicators={false} infiniteLoop={false} >{this.createCarousel()}</Carousel>}
        </Modal>
    )
  }
}

export default Modals
