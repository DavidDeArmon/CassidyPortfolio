import React from 'react'
import GalleryUtil from './Gallery'

import engagement1 from '../../assets/images/engagements/emmaChris (1).jpg'

import bridal1 from '../../assets/images/bridals/dannyMelissa (1).jpg'
import bridal2 from '../../assets/images/bridals/dannyMelissa (2).jpg'
import bridal3 from '../../assets/images/bridals/dannyMelissa (3).jpg'
import bridal4 from '../../assets/images/bridals/dannyMelissa (4).jpg'
import bridal5 from '../../assets/images/bridals/dannyMelissa (5).jpg'
import bridal6 from '../../assets/images/bridals/dannyMelissa (6).jpg'
import bridal7 from '../../assets/images/bridals/dannyMelissa (7).jpg'
import bridal8 from '../../assets/images/bridals/dannyMelissa (8).jpg'
import bridal9 from '../../assets/images/bridals/dannyMelissa (9).jpg'
import bridal10 from '../../assets/images/bridals/dannyMelissa (10).jpg'
import bridal11 from '../../assets/images/bridals/dannyMelissa (11).jpg'
import bridal12 from '../../assets/images/bridals/dannyMelissa (12).jpg'
import bridal13 from '../../assets/images/bridals/dannyMelissa (13).jpg'
import bridal14 from '../../assets/images/bridals/dannyMelissa (14).jpg'
import bridal15 from '../../assets/images/bridals/dannyMelissa (15).jpg'
import bridal16 from '../../assets/images/bridals/dannyMelissa (16).jpg'
import bridal17 from '../../assets/images/bridals/dannyMelissa (17).jpg'
import bridal18 from '../../assets/images/bridals/dannyMelissa (18).jpg'
import bridal19 from '../../assets/images/bridals/dannyMelissa (19).jpg'
import bridal20 from '../../assets/images/bridals/dannyMelissa (20).jpg'
import bridal21 from '../../assets/images/bridals/dannyMelissa (21).jpg'
import bridal22 from '../../assets/images/bridals/treyKyndell (1).jpg'
import bridal23 from '../../assets/images/bridals/treyKyndell (2).jpg'
import bridal24 from '../../assets/images/bridals/treyKyndell (3).jpg'
import bridal25 from '../../assets/images/bridals/treyKyndell (4).jpg'
import bridal26 from '../../assets/images/bridals/treyKyndell (5).jpg'
import bridal27 from '../../assets/images/bridals/treyKyndell (6).jpg'
import bridal28 from '../../assets/images/bridals/treyKyndell (7).jpg'
import bridal29 from '../../assets/images/bridals/treyKyndell (8).jpg'
import bridal30 from '../../assets/images/bridals/treyKyndell (9).jpg'
import bridal31 from '../../assets/images/bridals/treyKyndell (10).jpg'
import bridal32 from '../../assets/images/bridals/treyKyndell (11).jpg'
import bridal33 from '../../assets/images/bridals/treyKyndell (12).jpg'
import bridal34 from '../../assets/images/bridals/treyKyndell (13).jpg'
import bridal35 from '../../assets/images/bridals/treyKyndell (14).jpg'
import bridal36 from '../../assets/images/bridals/treyKyndell (15).jpg'
import bridal37 from '../../assets/images/bridals/treyKyndell (16).jpg'
import bridal38 from '../../assets/images/bridals/treyKyndell (17).jpg'
import bridal39 from '../../assets/images/bridals/treyKyndell (18).jpg'
import bridal40 from '../../assets/images/bridals/treyKyndell (19).jpg'
import bridal41 from '../../assets/images/bridals/treyKyndell (20).jpg'
import bridal42 from '../../assets/images/bridals/treyKyndell (21).jpg'

import wedding1 from '../../assets/images/weddings/kamKatie (1).jpg'

const ENGAGEMENT_IMAGES = [
    { id: '1', source: engagement1, thumbnail: engagement1, caption: 'Emma and Chris'}
];

const BRIDAL_IMAGES = [
    { id: '1', source: bridal1, thumbnail: bridal1, caption: 'Danny and Melissa'},
    { id: '2', source: bridal2, thumbnail: bridal2, caption: 'Danny and Melissa'},
    { id: '3', source: bridal3, thumbnail: bridal3, caption: 'Danny and Melissa'},
    { id: '4', source: bridal4, thumbnail: bridal4, caption: 'Danny and Melissa'},
    { id: '5', source: bridal5, thumbnail: bridal5, caption: 'Danny and Melissa'},
    { id: '6', source: bridal6, thumbnail: bridal6, caption: 'Danny and Melissa'},
    { id: '7', source: bridal7, thumbnail: bridal7, caption: 'Danny and Melissa'},
    { id: '8', source: bridal8, thumbnail: bridal8, caption: 'Danny and Melissa'},
    { id: '9', source: bridal9, thumbnail: bridal9, caption: 'Danny and Melissa'},
    { id: '10', source: bridal10, thumbnail: bridal10, caption: 'Danny and Melissa'},
    { id: '11', source: bridal11, thumbnail: bridal11, caption: 'Danny and Melissa'},
    { id: '12', source: bridal12, thumbnail: bridal12, caption: 'Danny and Melissa'},
    { id: '13', source: bridal13, thumbnail: bridal13, caption: 'Danny and Melissa'},
    { id: '14', source: bridal14, thumbnail: bridal14, caption: 'Danny and Melissa'},
    { id: '15', source: bridal15, thumbnail: bridal15, caption: 'Danny and Melissa'},
    { id: '16', source: bridal16, thumbnail: bridal16, caption: 'Danny and Melissa'},
    { id: '17', source: bridal17, thumbnail: bridal17, caption: 'Danny and Melissa'},
    { id: '18', source: bridal18, thumbnail: bridal18, caption: 'Danny and Melissa'},
    { id: '19', source: bridal19, thumbnail: bridal19, caption: 'Danny and Melissa'},
    { id: '20', source: bridal20, thumbnail: bridal20, caption: 'Danny and Melissa'},
    { id: '21', source: bridal21, thumbnail: bridal21, caption: 'Danny and Melissa'},
    { id: '22', source: bridal22, thumbnail: bridal22, caption: 'Trey and Kyndell'},
    { id: '23', source: bridal23, thumbnail: bridal23, caption: 'Trey and Kyndell'},
    { id: '24', source: bridal24, thumbnail: bridal24, caption: 'Trey and Kyndell'},
    { id: '25', source: bridal25, thumbnail: bridal25, caption: 'Trey and Kyndell'},
    { id: '26', source: bridal26, thumbnail: bridal26, caption: 'Trey and Kyndell'},
    { id: '27', source: bridal27, thumbnail: bridal27, caption: 'Trey and Kyndell'},
    { id: '28', source: bridal28, thumbnail: bridal28, caption: 'Trey and Kyndell'},
    { id: '29', source: bridal29, thumbnail: bridal29, caption: 'Trey and Kyndell'},
    { id: '30', source: bridal30, thumbnail: bridal30, caption: 'Trey and Kyndell'},
    { id: '31', source: bridal31, thumbnail: bridal31, caption: 'Trey and Kyndell'},
    { id: '32', source: bridal32, thumbnail: bridal32, caption: 'Trey and Kyndell'},
    { id: '33', source: bridal33, thumbnail: bridal33, caption: 'Trey and Kyndell'},
    { id: '34', source: bridal34, thumbnail: bridal34, caption: 'Trey and Kyndell'},
    { id: '35', source: bridal35, thumbnail: bridal35, caption: 'Trey and Kyndell'},
    { id: '36', source: bridal36, thumbnail: bridal36, caption: 'Trey and Kyndell'},
    { id: '37', source: bridal37, thumbnail: bridal37, caption: 'Trey and Kyndell'},
    { id: '38', source: bridal38, thumbnail: bridal38, caption: 'Trey and Kyndell'},
    { id: '39', source: bridal39, thumbnail: bridal39, caption: 'Trey and Kyndell'},
    { id: '40', source: bridal40, thumbnail: bridal40, caption: 'Trey and Kyndell'},
    { id: '41', source: bridal41, thumbnail: bridal41, caption: 'Trey and Kyndell'},
    { id: '42', source: bridal42, thumbnail: bridal42, caption: 'Trey and Kyndell'}
];



const WEDDING_IMAGES = [{ id: '1', source: wedding1, thumbnail: wedding1, caption: 'Trey and Kyndell'}];
const PORTRAIT_IMAGES = [];
const FAMILY_IMAGES = [];
const MATERNITY_IMAGES = [];
function GalleriesTwo(props) {
    let gallery = []
    if (props.openCategory === 1 ){ gallery = ENGAGEMENT_IMAGES }
    if (props.openCategory === 2 ){ gallery = BRIDAL_IMAGES }
    if (props.openCategory === 3 ){ gallery = WEDDING_IMAGES }
    if (props.openCategory === 4 ){ gallery = PORTRAIT_IMAGES }
    if (props.openCategory === 5 ){ gallery = FAMILY_IMAGES }
    if (props.openCategory === 6 ){ gallery = MATERNITY_IMAGES }
    return (
        <GalleryUtil images={gallery.map(({ id, source, thumbnail, caption, description }) => ({
            id,
            source,
            thumbnail,
            caption,
            description
        }))} />
    )
}

export default GalleriesTwo