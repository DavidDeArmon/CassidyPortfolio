import React from 'react'

function PricingCard(props) {
    return (
        <div className="pricing-row">
            <div className="pricing-column" >
                <img src={props.thumbnail} alt="thumbnail" />
            </div>
            <div className="pricing-column details">
                <p>{props.title}</p>
                {props.price} <br />
                {props.details}
            </div>
        </div>
    )
}
export default PricingCard