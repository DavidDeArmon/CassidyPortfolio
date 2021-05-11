import React from 'react'
import GalleriesTwo from './GalleriesTwo';

import emmaChris from '../../assets/images/engagements/emmaChris (11).webp'
import jaredAnnika from '../../assets/images/engagements/jaredAnnika (11).webp'
import jeffAshley from '../../assets/images/engagements/jeffAshley (20).webp'
import dannyMelissa from '../../assets/images/bridals/dannyMelissa (3).webp'
import treyKyndell from '../../assets/images/bridals/treyKyndell (7).webp'
import kamKatie from '../../assets/images/weddings/kamKatie (7).webp'
import kysonAshlee from '../../assets/images/weddings/kysonAshlee (32).webp'
import nateMegan from '../../assets/images/weddings/nateMegan (1).webp'
import alyssa from '../../assets/images/portraits/alyssa (1).webp'
import amy from '../../assets/images/portraits/amy (9).webp'
import gallardoFamily from '../../assets/images/families/gallardoFamily (9).webp'
import larsenFamily from '../../assets/images/families/larsenFamily (5).webp'
import abbyBen from '../../assets/images/maternity/abbyBen (2).webp'
import dallinMarisa from '../../assets/images/maternity/dallinMarisa (1).webp'
import dannyPeyton from '../../assets/images/maternity/dannyPeyton (3).webp'
import jonHaylie from '../../assets/images/jonHaylie/jonHaylie (7).webp'
import ellora from '../../assets/images/ellora/ellora (5).webp'


const CATEGORIES = [
    { id: 1, thumbnail: emmaChris, title: 'Emma & Chris' },
    { id: 2, thumbnail: jaredAnnika, title: 'Jared & Annika' },
    { id: 3, thumbnail: jeffAshley, title: 'Jeff & Ashley' },
    { id: 4, thumbnail: dannyMelissa, title: 'Danny & Melissa' },
    { id: 5, thumbnail: treyKyndell, title: 'Trey & Kyndell' },
    { id: 6, thumbnail: kamKatie, title: 'Kam & Katie' },
    { id: 7, thumbnail: kysonAshlee, title: 'Kyson & Ashlee' },
    { id: 8, thumbnail: nateMegan, title: 'Nate & Megan' },
    { id: 9, thumbnail: alyssa, title: 'Alyssa' },
    { id: 10, thumbnail: amy, title: 'Amy' },
    { id: 11, thumbnail: gallardoFamily, title: 'Gallardo Family' },
    { id: 12, thumbnail: larsenFamily, title: 'Larsen Family' },
    { id: 13, thumbnail: abbyBen, title: 'Abby & Ben' },
    { id: 14, thumbnail: dallinMarisa, title: 'Dallin & Marisa' },
    { id: 15, thumbnail: dannyPeyton, title: 'Danny & Peyton' },
    { id: 16, thumbnail: jonHaylie, title: 'Jon & Hailey' },
    { id: 17, thumbnail: ellora, title: 'Ellora' },
];

class GalleriesOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryIsOpen: false,
        };
    }
    openCategory = (openCategory) => {
        this.setState({ categoryIsOpen: true});
        this.props.openGalleryCategory(openCategory)
    }
    closeCategory = () => {
        this.setState({ categoryIsOpen: false });
        this.props.closeGalleryCategory()
    }
    createGallery(images) {
        if (images.length<1) return;

        const gallery = images.map((pic,key) => {
            return (
                <a
                    key={key}
                    className="image thumb"
                    id="noFlex"
                    href={pic.source}
                    onClick={e => {
                        e.preventDefault();
                        this.props.toggleViewer(key);
                    }}
                >
                    <img  src={pic.source} alt={pic.caption} />
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
        let displayCategory
        if (this.props.openCategory === 0) {
            displayCategory = <div className='gallery'>
                <h2>Galleries</h2>
                {CATEGORIES.map((e) => (
                    <button className='button' key = {e.id} onClick={()=>this.openCategory(e.id)}>
                        <img src={e.thumbnail} alt={e.title} />
                            <p>{e.title}</p>
                    </button>
                ))}
            </div>
        } else {
            let imgArr = GalleriesTwo(this.props.openCategory);
            displayCategory = this.createGallery(imgArr)
        }
        return (
            <div id="categoryBox" >
               {displayCategory}
            </div>
        )
    }
}
export default GalleriesOne