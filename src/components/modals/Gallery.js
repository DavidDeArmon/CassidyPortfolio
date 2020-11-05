import React, { Component } from 'react';
import ImageViewer from 'react-simple-image-viewer';
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
        const imgurl = images.map((e)=>{return e.source})
        return (
            <div >
                {this.renderGallery(images)}
                {viewerIsOpen && (
                    <div className="imageViewer" >< ImageViewer src={imgurl} currentIndex={selectedIndex-1} onClose={this.toggleViewer} /></div>
                    )}
            </div>
            
        )
    }
}

export default GalleryUtil;