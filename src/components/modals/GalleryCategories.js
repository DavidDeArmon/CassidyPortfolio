import React from 'react'
import Gallery from './Gallery'

import thumb01 from '../../assets/images/thumbs/07.jpg'
import thumb02 from '../../assets/images/thumbs/08.jpg'
import thumb03 from '../../assets/images/thumbs/09.jpg'
import thumb04 from '../../assets/images/thumbs/10.jpg'
import thumb05 from '../../assets/images/thumbs/11.jpg'
import thumb06 from '../../assets/images/thumbs/12.jpg'

import full01 from '../../assets/images/fulls/07-full.jpg'
import full02 from '../../assets/images/fulls/08-full.jpg'
import full03 from '../../assets/images/fulls/09-full.jpg'
import full04 from '../../assets/images/fulls/10-full.jpg'
import full05 from '../../assets/images/fulls/11-full.jpg'
import full06 from '../../assets/images/fulls/12-full.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '7', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '8', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '10', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '9', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '11', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '12', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' }
];

//USED IN components/modals/RecentWork.js
function GalleryCategories(props) {
    let gallery = []
    // if (props.openCategory = 0 ){ gallery = DEFAULT_IMAGES }
    gallery = DEFAULT_IMAGES
    return (
        <Gallery images={gallery.map(({ id, source, thumbnail, caption, description }) => ({
            id,
            source,
            thumbnail,
            caption,
            description
        }))} />
    )
}

export default GalleryCategories