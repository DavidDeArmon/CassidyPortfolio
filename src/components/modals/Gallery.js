import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0
        };
        this.toggleLightbox = this.toggleLightbox.bind(this);
    }
    toggleLightbox(id) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex: id
        }));
    }
    renderGallery(images) {
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
                        this.toggleLightbox(pic.id);
                    }}
                >
                    <img src={pic.thumbnail} alt={pic.caption} />
                </a>
            );
        });

        return (
            <div className="gallery">
                {gallery}
            </div>
        );
    }

    render() {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <div >
                {this.renderGallery(images)}
                <ModalGateway>
                    {lightboxIsOpen && (
                        <Modal onClose={this.toggleLightbox} ariaHideApp={false}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

export default Gallery;