import React,{useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import "./header.css";

export default function Header() {


   const getdata = useSelector((state) => state.cart)
   console.log(getdata)

  const [ismobile, setismobile] = useState(false)
  const[showcart, setShowCart] = useState(false)

  return (
     <>
     <header className="header">
          <h2>ReactStore</h2>

          <nav className= {ismobile ? "mobile-menu-nav" : "navbar-list-menu" }   onClick={() =>setismobile(false)}>
             <ul className='navbar-list'>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/product'>Products</NavLink></li>
              <li><NavLink to='/Shop'>Shop</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              <li><NavLink to='/login' className="login">Login</NavLink></li>
             </ul>
            <div className='cartitem' onClick={() => {setShowCart(true)}}>
               <i class="fa-solid fa-cart-shopping"></i>
               <span>{getdata.length}</span>
            </div>
        </nav>
        <div className="mobile-menu-icon" onClick={() => setismobile(!ismobile)}>
          {
             ismobile ? ( <i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)
          }
         
          
        </div>
     </header>
     { showcart && <Cart setShowCart={setShowCart} />}

     </>
  );
}
