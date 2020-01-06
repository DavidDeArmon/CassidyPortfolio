import React from 'react'
import PricingCard from './PricingCard'
import thumb01 from '../../assets/images/thumbs/07.jpg'
function Pricing() {
    const pricingModel = [
        // { id: 0, thumbnail: '', title: "", price: "Price", photos: "# Photos", details: "Details" },
        { id: 1, thumbnail: thumb01, title: "Wedding Day", price: "$750", photos: "300+", details: "5 hours + $50 for each extra hour" },
        { id: 2, thumbnail: thumb01, title: "Only Ceremony / Temple", price: "$350", photos: "300+", details: "Ceremony / Exit. Family Photos. Bridals at location." },
        { id: 3, thumbnail: thumb01, title: "Bridals / First Look", price: "$175", photos: "100+", details: "2 hours" },
        { id: 4, thumbnail: thumb01, title: "Engagements", price: "$125", photos: "60+", details: "1 hours" },
        { id: 5, thumbnail: thumb01, title: "Creative Portrait / Senior / Missionary", price: "$100", photos: "50+", details: "1 hour. 2 Outfits. 1 Location." },
        { id: 6, thumbnail: thumb01, title: "Couples", price: "$125", photos: "60+", details: "1 hour. 1 Location." },
        { id: 7, thumbnail: thumb01, title: "Families", price: "$150", photos: "60+", details: "( 4 - 6 ) Family members. ( 7 - 10 ) + $50. + $20 per member after 10." },
        { id: 8, thumbnail: thumb01, title: "Corporate / Large Families", price: "$400", photos: "60+", details: "( 20 - 30 ) Subjects." },
    ]
    let displayModel = pricingModel.map((e) => <PricingCard key={e.id} thumbnail={e.thumbnail} title={e.title} price={e.price} photos={e.photos} details={e.details} />);
    return (
        <div className="table" id="box">
            <h2>Pricing</h2>
            {displayModel}
            {/* <table>
                <tbody>
                    <tr>
                        <th><h3>Videos</h3></th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>Wedding Day</td>
                        <td>$400</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>First Look</td>
                        <td>$200</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Full Wedding Package</td>
                        <td>$950</td>
                        <td>Engagments. Bridals/First Look. Full Wedding Day( 5 hours )</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}
export default Pricing