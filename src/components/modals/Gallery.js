import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

class GalleryUtil extends Component {
    constructor() {
        super();
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
                        this.toggleViewer(pic.id);
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
        const { selectedIndex, viewerIsOpen } = this.state;
        const imgurl = images.map((e) => { return e.source })
        return (
            <div>
                {this.renderGallery(images)}
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={this.toggleViewer}>
                            <Carousel
                                currentIndex={selectedIndex}
                                views={images.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>

        )
    }
}

export default GalleryUtil;