import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartItems(props) {
    const nav = useNavigate()
    const [flag, setFlag] = useState(false)

    const [payFlag, setPayFlag] = useState(true)
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [digits, setDigits] = useState('')

    const [productsFlag, setProductsFlag] = useState(true)
    const [totalFlag, setTotalFlag] = useState(true)

    const showAllProducts = () => {
        if (productsFlag === true) {
            return <div>
                <h3 id='productsTitle'> your products</h3>
                <div id='allProducts'>
                    {props.cartArr.map((val) => {
                        return <div>
                            <ul>
                                <li style={{ fontFamily: 'sans-serif',fontSize:'20px' }}>{val.name} | {val.price}$</li>
                            </ul>
                        </div>
                    })}
                </div>
            </div>
        }
    }
    const showTotalPrice = () => {
        if (totalFlag === true) {
            return <div>
                <div id='totalPriceDiv'>
                    <h3> your total price :</h3>
                  <p style={{fontSize:'30px',marginTop:'-15px',fontWeight:"bold"}}>{props.sum}$</p>   <br />
                </div>
            </div>
        }
    }
    const showPayArea = () => {
        if (payFlag === true) {
            return <div id='payAreaDiv'>
                <input className='inps' onChange={(e) => { setNumber(e.target.value) }} type='number' placeholder='card number' /> <br />
                <input id='dateInp' onChange={(e) => { setDate(e.target.value) }} type='month' placeholder='date' /> <br />
                <input className='inps' onChange={(e) => { setDigits(e.target.value) }} type='number' placeholder='trhee digits' /> <br />
                <button id='areaPayBtn' onClick={() => { checkInp() }}>pay</button>
            </div>
        }
    }
    const checkInp = () => {
        if (props.cartArr.length == 0) {
            alert('Please choose a product')
        }
        else {

            if (number.length == 0 || date.length == 0 || digits.length == 0) {
                alert('Please fill in all text fields')
            }
            else if (number.length != 16) {
                alert('A credit card number should contain 16 numbers')
            }
            else if (digits.length != 3) {
                alert('Please enter only the last 3 digits on the back of the card')
            }
            else {
                setFlag(true)
                setPayFlag(false)
                setProductsFlag(false)
                setTotalFlag(false)
                props.buy()
            }
        }
    }
    const checkFlag = () => {
        if (flag === true) {
            return <div id='thankYouDiv'>
                <h1>thank you !</h1> <br />
                <button id='thankBtn' onClick={() => { nav('/'); setFlag(false) }}>back to store</button>
            </div>
        }
    }

    return (
        <div id='cartPage'>
            <div >{props.homeMsg()}</div>
            {showAllProducts()}
            {showTotalPrice()}
            {showPayArea()}
            {checkFlag()}
        </div>
    )
}
//     return (
//         <div id='cartPage'>
//             <div >{props.homeMsg()}</div>
//             <div style={{ marginLeft: '30%', display: 'flex', justifyContent: 'space-between', width: '600px' }}>

//                 <div style={{ width: '200px' }}>
//                     <h3> your products:</h3>
//                     {props.cartArr.map((val) => {
//                         return <div style={{ textAlign: 'left' }}>
//                             <ul>
//                                 <li>{val.name} | {val.price}$</li>
//                             </ul>
//                         </div>
//                     })}
//                 </div>

//                 <div>
//                     <h3> your total price :</h3>
//                     {props.sum}$ <br />
//                 </div>
//             </div>
//             {showPayArea()}
//             {checkFlag()}
//         </div>
//     )
// }
