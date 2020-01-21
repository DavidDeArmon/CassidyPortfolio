import React from 'react'
import GalleryCategories from './GalleryCategories';
import creative from '../../assets/images/fulls/creative.jpg'
import missionary from '../../assets/images/fulls/missionary.jpg'
import familesOne from '../../assets/images/fulls/familesOne.jpg'
import portraits from '../../assets/images/fulls/portraits.jpg'
import engagements from '../../assets/images/fulls/engagements.jpg'
import firstLook from '../../assets/images/fulls/firstLook.jpg'
import fullWeddingCoverage from '../../assets/images/fulls/fullWeddingCoverage.jpg'
const CATEGORIES = [
    { id: '1', thumbnail: engagements, title: 'Engagements' },
    { id: '2', thumbnail: firstLook, title: 'Bridals' },
    { id: '3', thumbnail: fullWeddingCoverage, title: 'Weddings' },
    { id: '4', thumbnail: portraits, title: 'Portraits' },
    { id: '5', thumbnail: familesOne, title: 'Families' },
    { id: '6', thumbnail: missionary, title: 'Missionary' },
    { id: '7', thumbnail: creative, title: 'Creative' },
];

class RecentWork extends React.Component {
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
            displayCategory = <GalleryCategories openCategory={openCategory} />
        }
        return (
            <div id="box" >
                {displayCategory}
            </div>
        )
    }
}
export default RecentWork