import React from 'react'
import PricingCard from './PricingCard'
import creative from '../../assets/images/thumbs/creative.webp'
import familesOne from '../../assets/images/thumbs/familesOne.webp'
import engagements from '../../assets/images/thumbs/engagements.webp'
import firstLook from '../../assets/images/thumbs/firstlook.webp'
import sealing from '../../assets/images/thumbs/sealing.webp'
import ceremony from '../../assets/images/thumbs/ceremony.webp'
import fullWeddingCoverage from '../../assets/images/thumbs/fullweddingcoverage.webp'
import fullWeddingPackage from '../../assets/images/thumbs/fullweddingpackage.webp'
function Pricing() {
  
    const pricingModel = [
        // { id: 0, thumbnail: '', title: "", price: "Price", photos: "# Photos", details: "Details" },
        { id: 1, thumbnail: creative, title: "Portraits", price: "$100", details: "1 Hr" },
        { id: 2, thumbnail: familesOne, title: "Families", price: "$250 ", details: "45 minutes (more time added for more family members) +20 per person " },
        { id: 3, thumbnail: engagements, title: "Engagements/Couples", price: "$250", details: "1 Hr, 2 outfits" },
        { id: 4, thumbnail: firstLook, title: "Bridals", price: "$300", details: "1.5 Hrs" },
        { id: 5, thumbnail: sealing, title: "I love you Wedding Package", price: "$600", details: "2 hrs, exit, family photos & bridals at temple" },
        { id: 6, thumbnail: ceremony, title: "I love you lots Wedding Package", price: "$800", details: "2.5 hrs, ceremony, family photos & bridals at the venue" },
        { id: 7, thumbnail: fullWeddingCoverage, title: "I love you more Wedding Package", price: "$1500", details: "5 hrs, sealing/ceremony & reception coverage" },
        { id: 8, thumbnail: fullWeddingPackage, title: "I love you most Wedding Package", price: "$2000", details: "sealing/ceremony, reception, bridals & engagements " },
    ]

    let displayModel = pricingModel.map((e) => <PricingCard key={e.id} thumbnail={e.thumbnail} title={e.title} price={e.price} photos={e.photos} details={e.details} />);
    
    return (
        <div className="pricing" id="box">
            <h2>Pricing</h2>
            {displayModel}
            <h5>*Taxes are factored into the price for each session and package. </h5>
        </div>
    )
}
export default Pricing