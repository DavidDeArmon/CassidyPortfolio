import React from 'react'
import PricingCard from './PricingCard'
import thumb01 from '../../assets/images/thumbs/07.jpg'
import thumb02 from '../../assets/images/thumbs/08.jpg'
import thumb03 from '../../assets/images/thumbs/09.jpg'
import thumb04 from '../../assets/images/thumbs/10.jpg'
function Pricing() {
    const pricingModel = [
        // { id: 0, thumbnail: '', title: "", price: "Price", photos: "# Photos", details: "Details" },
        { id: 1, thumbnail: thumb01, title: "Creative Portraits", price: "$100", photos: "50+", details: "1 Hour" },
        { id: 2, thumbnail: thumb02, title: "Missionary Portraits", price: "$100", photos: "50+", details: "1 Hour, 1 Location, 2 Outfits" },
        { id: 3, thumbnail: thumb03, title: "Senior Portraits", price: "$100", photos: "50+", details: "1 Hour, 1 Location, 2 Outfits" },
        { id: 4, thumbnail: thumb04, title: "Familes of 3-6", price: "$150", photos: "100+", details: "1 Location" },
        { id: 5, thumbnail: thumb01, title: "Familes of 7-10", price: "$200 + $20 per person after", photos: "100+", details: "1 Location" },
        { id: 6, thumbnail: thumb02, title: "Large / Extended Familes 21-30", price: "$500 + $20 per person after", photos: "100+", details: "1 Location" },
        { id: 7, thumbnail: thumb03, title: "Maternity", price: "$100", photos: "50+", details: "1 Hour, 1 Location" },
        { id: 8, thumbnail: thumb04, title: "Engagements", price: "$125", photos: "60+", details: "1 Hour, 1 Location, 2 Outfits" },
        { id: 9, thumbnail: thumb01, title: "First Look", price: "$175", photos: "100+", details: "1 - 2 Hour, 1 - 2 Location" },
        { id: 10, thumbnail: thumb02, title: "Sealing", price: "$350", photos: "150+", details: "Exit, Family Photos, Bridals at temple" },
        { id: 11, thumbnail: thumb03, title: "Ceremony", price: "$400", photos: "200+", details: "Ceremony, Family Photos, Bridals at location" },
        { id: 12, thumbnail: thumb04, title: "Full Wedding Day Coverage", price: "$850", photos: "300+", details: "4 - 5 Hours, +$100 per hour added" },
        { id: 13, thumbnail: thumb01, title: "Full Wedding Package", price: "$1050", photos: "300+", details: "Engagements, First Look, and Full Wedding Day Coverage" },
    ]

    let displayModel = pricingModel.map((e) => <PricingCard key={e.id} thumbnail={e.thumbnail} title={e.title} price={e.price} photos={e.photos} details={e.details} />);
    
    return (
        <div className="pricing" id="box">
            <h2>Pricing</h2>
            {displayModel}
        </div>
    )
}
export default Pricing