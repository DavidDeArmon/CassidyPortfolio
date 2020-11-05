import React from 'react'

function PricingCard(props) {
    return (
        <div className="pricing-row">
            <div className="pricing-column" >
                <img src={props.thumbnail} alt="thumbnail" />
            </div>
            <div className="pricing-column details">
                <h3>{props.title}</h3>
                <p>{props.price} </p>
                <p>{props.details}</p>
            </div>
        </div>
    )
}
export default PricingCard