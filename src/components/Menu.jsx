import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Menu(props) {
    const nav = useNavigate()
    return (
        <div id='firstDiv'>
                <div id='menuDiv' style={{  }}>
                    <div  onClick={() => { nav('/');props.setHomeMsgFlag(false) }} id='div2'></div>
                    <h1 id='title'>PEREGS SHOP</h1>
                    <div  onClick={() => { nav('/cart');props.setMsgFlag(false);props.setHomeMsgFlag(true) }} id='div1'></div>

                </div>
        </div>
    )
}
