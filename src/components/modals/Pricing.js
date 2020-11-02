import React from 'react'
import PricingCard from './PricingCard'
import creative from '../../assets/images/thumbs/creative.jpg'
import familesOne from '../../assets/images/thumbs/familesOne.jpg'
import engagements from '../../assets/images/thumbs/engagements.jpg'
import firstLook from '../../assets/images/fulls/FIRSTLOOKKatieBryce.jpg'
import sealing from '../../assets/images/thumbs/sealing.jpg'
import ceremony from '../../assets/images/thumbs/ceremony.jpg'
import fullWeddingCoverage from '../../assets/images/thumbs/fullWeddingCoverage.jpg'
import fullWeddingPackage from '../../assets/images/thumbs/fullWeddingPackage.jpg'
function Pricing() {
  
    const pricingModel = [
        // { id: 0, thumbnail: '', title: "", price: "Price", photos: "# Photos", details: "Details" },
        { id: 1, thumbnail: creative, title: "Portraits", price: "$100", details: "1 Hour" },
        { id: 2, thumbnail: familesOne, title: "Familes", price: "$175 ", details: "$15/Person After 3" },
        { id: 3, thumbnail: engagements, title: "Engagements/Couples", price: "$150", details: "1 Hour" },
        { id: 4, thumbnail: firstLook, title: "Bridals", price: "$200", details: "1 Hour" },
        { id: 5, thumbnail: sealing, title: "Sealing Only", price: "$350", details: "Exit, Family Photos, Bridals at Temple" },
        { id: 6, thumbnail: ceremony, title: "Ceremony", price: "$500", details: "Ceremony, Family Photos, Bridals at Location" },
        { id: 7, thumbnail: fullWeddingCoverage, title: "Wedding Day Coverage", price: "$950", details: "$100/Hr After 4 Hours" },
        { id: 8, thumbnail: fullWeddingPackage, title: "Full Wedding Package", price: "$1100", details: "Engagements, Bridals, Wedding Day Coverage" },
    ]

    let displayModel = pricingModel.map((e) => <PricingCard key={e.id} thumbnail={e.thumbnail} title={e.title} price={e.price} photos={e.photos} details={e.details} />);
    
    return (
        <div className="pricing" id="box">
            <h2>Pricing</h2>
            {displayModel}
            <h5>*Additional Travel fees apply outside of Utah County. Contact me for details.</h5>
        </div>
    )
}
export default Pricing