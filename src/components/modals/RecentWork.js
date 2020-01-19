import React from 'react'
import GalleryCategories from './GalleryCategories';
import thumb01 from '../../assets/images/thumbs/07.jpg'
import thumb02 from '../../assets/images/thumbs/08.jpg'
import thumb03 from '../../assets/images/thumbs/09.jpg'
import thumb04 from '../../assets/images/thumbs/10.jpg'

const CATEGORIES = [
    { id: '1', thumbnail: thumb01, title: 'Engagements / Couples' },
    { id: '2', thumbnail: thumb02, title: 'Bridals' },
    { id: '3', thumbnail: thumb03, title: 'Weddings' },
    { id: '4', thumbnail: thumb04, title: 'Portraits' },
    { id: '5', thumbnail: thumb01, title: 'Families' },
    { id: '6', thumbnail: thumb02, title: 'Missionary' },
    { id: '7', thumbnail: thumb03, title: 'Creative' },
    { id: '8', thumbnail: thumb04, title: 'Headshots' },
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
                    <div className='button' key = {e.id}>
                        <img src={e.thumbnail} alt={e.title} />
                            <p>{e.title}</p>
                    </div>
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