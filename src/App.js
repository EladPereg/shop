import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListItems from './components/ListItems';
import CartItems from './components/CartItems';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  let image1 = <div id='imag'></div>
  let image2 = <div id='imag2'></div>
  let image3 = <div id='imag3'></div>
  let image4 = <div id='imag4'></div>
  let image5 = <div id='imag5'></div>
  let image6 = <div id='imag6'></div>
  let image7 = <div id='imag7'></div>
  let image8 = <div id='imag8'></div>
  let image9 = <div id='imag9'></div>
  let image10 = <div id='imag10'></div>
  let image11 = <div id='imag11'></div>
  let image12 = <div id='imag12'></div>
  // let listArr = [
  //   { name: 'Original Charger', price: 80, image: image1 },
  //   { name: 'Headphones', price: 30, image: image2 },
  //   { name: 'Computer', price: 800, image: image3 },
  //   { name: 'Air-pods', price: 50, image: image4 },
  //   { name: 'iphone', price: 700, image: image5 },
  //   { name: 'TV', price: 200, image: image6 },
  //   { name: 'Samsung galaxy', price: 600, image: image7 },
  //   { name: 'Dyson', price: 550, image: image8 },
  //   { name: 'Keyboard', price: 100, image: image9 },
  //   { name: 'Mause', price: 50, image: image10 },
  //   { name: 'X box', price: 400, image: image11 },
  //   { name: 'Playstation 5', price: 500, image: image12 },
  // ]

  const [listArr, setListArr] = useState([
    { name: 'Original Charger', price: 80, image: image1, addToCart: false, quantity: 0},
    { name: 'Headphones', price: 30, image: image2, addToCart: false, quantity: 0 },
    { name: 'Computer', price: 800, image: image3, addToCart: false, quantity: 0 },
    { name: 'Air-pods', price: 50, image: image4, addToCart: false, quantity: 0 },
    { name: 'iphone', price: 700, image: image5, addToCart: false, quantity: 0 },
    { name: 'TV', price: 200, image: image6, addToCart: false, quantity: 0 },
    { name: 'Samsung galaxy', price: 600, image: image7, addToCart: false, quantity: 0 },
    { name: 'Dyson', price: 550, image: image8, addToCart: false, quantity: 0 },
    { name: 'Keyboard', price: 100, image: image9, addToCart: false, quantity: 0 },
    { name: 'Mause', price: 50, image: image10, addToCart: false, quantity: 0 },
    { name: 'X box', price: 400, image: image11, addToCart: false, quantity: 0 },
    { name: 'Playstation 5', price: 500, image: image12, addToCart: false, quantity: 0 },
  ])
  console.log(listArr)
  // const [noRepetArr,setNoRepetArr]=useState([])

  const checkIfAdd = (i) => {
    listArr[i].addToCart = true
    listArr[i].quantity++
    setListArr([...listArr])
  }
  const showAddMsg = (i) => {
    if (listArr[i].addToCart === true) {
      return <p>add to cart !</p>
    }
  }

  const [msgFlag, setMsgFlag] = useState(false)

  const [totalPrice, setTotalPrice] = useState([])

  const addToTatal = (some) => {
    totalPrice.push(some)
    setTotalPrice([...totalPrice])
  }
  console.log(totalPrice)

  const [sum, SetSum] = useState(0)
  const calaTotalArr = () => {
    for (let i = 0; i < totalPrice.length; i++) {
      SetSum(sum + totalPrice[i])
    }
  }

  const [cartArr, setCartArr] = useState([])
  const addToCarArr = (i) => {
    setCartArr([...cartArr, listArr[i]])
  }

  const buy = () => {
    setCartArr([])
    SetSum(0)
  }

  const [homeMsgFlag, setHomeMsgFlag] = useState(false)
  const homeMsg = () => {
    if (homeMsgFlag === true) {
      return <h5 id='h5Msg'> Click here to return to the home page {`=>`}</h5>
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Menu msgFlag={msgFlag} setMsgFlag={setMsgFlag} setHomeMsgFlag={setHomeMsgFlag} />
        <Routes>
          <Route path='*' element={<ListItems showAddMsg={showAddMsg} checkIfAdd={checkIfAdd} setHomeMsgFlag={setHomeMsgFlag} msgFlag={msgFlag} setMsgFlag={setMsgFlag} listArr={listArr} addToCarArr={addToCarArr} addToTatal={addToTatal} calaTotalArr={calaTotalArr} />} />
          <Route path='/cart' element={<CartItems homeMsg={homeMsg} cartArr={cartArr} sum={sum} buy={buy} listArr={listArr} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;