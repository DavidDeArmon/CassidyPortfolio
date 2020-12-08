import React from 'react'
import GalleriesTwo from './GalleriesTwo';

import engage1 from '../../assets/images/engagements/emmaChris (11).webp'
import bridal1 from '../../assets/images/bridals/dannyMelissa (1).webp'
import wedding1 from '../../assets/images/weddings/kamKatie (7).webp'
import portrait1 from '../../assets/images/portraits/alyssa (1).webp'
import family1 from '../../assets/images/families/gallardoFamily (9).webp'
import maternity1 from '../../assets/images/maternity/abbyBen (2).webp'


const CATEGORIES = [
    { id: 1, thumbnail: engage1, title: 'Engagements' },
    { id: 2, thumbnail: bridal1, title: 'Bridals' },
    { id: 3, thumbnail: wedding1, title: 'Weddings' },
    { id: 4, thumbnail: portrait1, title: 'Portraits' },
    { id: 5, thumbnail: family1, title: 'Families' },
    { id: 6, thumbnail: maternity1, title: 'Maternity' },
];

class GalleriesOne extends React.Component {
    constructor() {
        super();
        this.state = {
            categoryIsOpen: false,
            openCategory: 0
        };
    }
    openCategory = (openCategory) => {
        this.setState({ categoryIsOpen: true, openCategory });
    }
    closeCategory = () => {
        this.setState({ categoryIsOpen: false });
    }
    render() {
        let displayCategory
        let openCategory = this.state.openCategory
        if (openCategory === 0) {
            displayCategory = <div className='gallery'>
                <h2>Categories</h2>
                {CATEGORIES.map((e) => (
                    <button className='button' key = {e.id} onClick={()=>this.openCategory(e.id)}>
                        <img src={e.thumbnail} alt={e.title} />
                            <p>{e.title}</p>
                    </button>
                ))}
            </div>
        } else {
            displayCategory = <GalleriesTwo openCategory={openCategory} />
        }
        return (
            <div id="categoryBox" >
                {displayCategory}
            </div>
        )
    }
}
export default GalleriesOne