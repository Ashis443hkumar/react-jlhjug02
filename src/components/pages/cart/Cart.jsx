import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { remove } from '../../../store/cartSlice';
import './style.css';

export default function Cart({ setShowCart }) {

 const getItems = useSelector((state)=> state.cart)
 console.log(getItems)

 const dishpath = useDispatch()



 const RemoveItems = (id) =>{
   dishpath(remove(id))
     
 }




  return (
    <>
      {/* <h2 onClick={() => {setShowCart(false)}}>cart pages section</h2> */}

        {
          getItems.length ? <div className="cartEmpty">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ProductsName</th>
                </tr>
              </thead>
              <tbody>
                {
                  getItems.map((val) =>{
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink  to={`/cart/${val.id}`}  >
                            <img src={val.image} alt="" style={{width:"5rem", height:"5rem", paddingRight:"10px"}} />
                            </NavLink>
                            </td>
                        <td style={{paddingLeft:"2rem", margin:"1rem"}}>
                          <p>{val.title}</p>
                          <p>{val.price}</p>
                          <p><i class="fa-solid fa-trash"></i></p>
                          </td>
                          <td>
                            <p><i class="fa-solid fa-trash" onClick={() => RemoveItems(val.id)}></i></p>
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </table>
          </div> :  
         <div className="cartEmpty">
          <p className="cartDelete">
            <i
              onClick={() => {
                setShowCart(false);
              }}
              class="fa-solid fa-xmark"
            ></i>
          </p>
          <p className="cartText">Your Cart Is Empty!</p>
          <p className="emtpyImg">
            <i class="fa-solid fa-cart-shopping"></i>
          </p>
        </div>
        }
      
    </>
  );
}
