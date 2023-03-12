import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/cartSlice';
import Data from '../../dataStore/Data';

export default function NewAriable(props) {

  const [data, setData] = useState(Data);
  
  // const dispather = useDispatch();

  const dispatch = useDispatch();

  const handlerAddToCart = (val)=>{
    dispatch(add(val))
  }

  return (
    <>
      <section className="">
        <div className="heading">
          {/* <h2>New Arrials Products</h2> */}
          <h2>{props.subtitle}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            laboriosam sint facere?
          </p>
        </div>

        <div className="products">
          {data.map((val) => (
            <div className="box" key={val.id}>
              <img src={val.image} alt="dsffsd" />
              <h2>{val.title}</h2>
              <h4>{val.subtitle}</h4>
              <p>{val.price}</p>
              {/* <button onClick={()=> addProduct(val)}>Add to cart</button> */}
              <button onClick={() => handlerAddToCart(val)} className="button">Add To Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
