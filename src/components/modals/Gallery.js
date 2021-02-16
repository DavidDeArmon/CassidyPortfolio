import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
// import Img from "gatsby-image";

class GalleryUtil extends Component {
    constructor() {
        this.state = {
            viewerIsOpen: false,
            selectedIndex: 0
        };
        this.toggleViewer = this.toggleViewer.bind(this);
    }
    toggleViewer(id) {
        this.setState(state => ({
            viewerIsOpen: !state.viewerIsOpen,
            selectedIndex: id
        }));
    }
    createGallery(images) {
        if (!images) return;

        const gallery = images.map((pic) => {
            return (
                <a
                    key={pic.id}
                    className="image thumb"
                    id="noFlex"
                    href={pic.source}
                    onClick={e => {
                        e.preventDefault();
                        this.toggleViewer(pic.id);
                    }}
                >
                    <img  src={pic.thumbnail} alt={pic.caption} />
                </a>
            );
        });

        return (
            <div className="gallery">
                {gallery}
            </div>
        );
    }
    createCarousel(images){
        if (!images) return;

        let carouselImages = images.map((pic) => {
            return (
                <div key={pic.id}>
                    <img src={pic.source} alt={pic.caption} />
                </div>
            );
        });
        console.log('createcarousel')
        return carouselImages;
    }

    render() {
        const { images } = this.props;
        const { selectedIndex, viewerIsOpen } = this.state;
        return (
            <>
                    {viewerIsOpen ? (
                        <Carousel className="imageViewer" selectedItem={selectedIndex} showThumbs={false} showArrows={false} showIndicators={false} infiniteLoop={false} >
                            {this.createCarousel(images)}
                        </Carousel>
                    ) : null}
                    {this.createGallery(images)}
            </>

        )
    }
}

export default GalleryUtil;