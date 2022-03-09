import './App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png'
import Footer from './Footer.js'
import { useEffect, useState } from 'react'
import './layout.css'

function App() {
  const cartSave = localStorage.getItem('cart')
  const [activeCategory, setActiveCategory] = useState('')

  const [cart, updateCart] = useState(cartSave ? JSON.parse(cartSave) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt="logo la maison de la jungle" className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='app'>
        <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <Footer/>
    </div>
  );
}

export default App
