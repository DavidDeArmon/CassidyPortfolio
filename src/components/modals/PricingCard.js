import React from 'react'

function PricingCard(props) {
    return (
        <div className="table-row">
            <div className="table-column" >
                <img src={props.thumbnail} alt="thumbnail" />
                <p>{props.title}</p>
            </div>
            <div className="table-column details">
                {props.price} for {props.title} <br />
                {props.details}
            </div>
        </div>
    )
}
export default PricingCard