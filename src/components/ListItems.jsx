import React, { useState } from 'react'
import '../App.css';


export default function ListItems(props) {
    const showMsg = () => {
        if (props.msgFlag === true) {
            return <h5>{`<=`} click here to see your cart !</h5>
        }
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
                            onClick={() => { props.addToCarArr(index); props.addToTatal(val.price); props.calaTotalArr(); props.setMsgFlag(true) }}>Add to my cart</button>
                    </div>
                })}
            </div>
        </div>
    )
}
// import Item from './Item';
// export default function ListItems(props) {
//     const showTable = () => {
//         return props.listArr.map((val, index) => {
//             return <tr style={{ border: '2px black solid' }}>
//                 <td style={{ border: '2px black solid', height: '35px' }}>{val.name}</td>
//                 <td style={{ border: '2px black solid', height: '35px' }}>{val.price}$</td>
//                 <td style={{ border: '2px black solid', height: '35px' }}>
//                     <button onClick={()=>{props.addToCarArr(index);props.addToTatal(val.price);props.calaTotalArr()}} style={{ width: '80px', height: '30px', borderRadius: 20, fontSize: 25, fontWeight: 'bolder' }}>+</button></td>
//             </tr>
//         })
//     }
//     return (
//         <div>
//             <table style={{marginTop:'50px', marginLeft:'38%', border: '2px black solid', borderCollapse: 'collapse', width: '400px', }}>
//                 <tr style={{ border: '4px black solid', height: '50px' }}>
//                     <td style={{ border: '2px black solid' }}>product name</td>
//                     <td style={{ border: '2px black solid' }}>price</td>
//                     <td style={{ border: '2px black solid' }}>add to my cart</td>
//                 </tr>
//                 {showTable()}
//             </table>

//             {/* {props.listArr.map((val,index) => {
//                 return <Item val={val} index={index} addToCarArr={props.addToCarArr} addToTatal={props.addToTatal} calaTotalArr={props.calaTotalArr}/>
//             })} */}
//         </div>
//     )
// }