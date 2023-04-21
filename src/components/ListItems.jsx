import React, { useState } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function ListItems(props) {
    const showMsg = () => {
        if (props.msgFlag === true) {
            return <h5>{`<=`} click here to see your cart !</h5>
        }
    }
    const showIcon = () => {
        return <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    }


    return (
        <div id='responsDiv'>
            <div id='msg'>{showMsg()}</div>
            <div id='listItemDiv'>
                {props.listArr.map((val, index) => {
                    return <div id='miniListItemDiv'>
                        <h4>{val.name}</h4>
                        price:{val.price}$
                        {val.image}
                        <button id='btn'
                            onClick={() => { props.checkIfAdd(index); props.addToCarArr(index); props.addToTatal(val.price); props.calaTotalArr(); props.setMsgFlag(true) }}>Add to my cart</button><br />
                        {val.addToCart ? showIcon() : ''}
                        <p id='addMsg'>{val.addToCart ? `add to cart!` : ''}</p> 
                        <p id='quantityMsg'>{val.addToCart ? `quantity: ${val.quantity}` : ''} </p>
                      
                    </div>
                })}
            </div>
        </div>
    )
}