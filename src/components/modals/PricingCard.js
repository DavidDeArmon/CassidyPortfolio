import React from 'react'

function PricingCard(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>{props.photos}</td>
            <td>{props.details}</td>
        </tr>
    )
}
export default PricingCard