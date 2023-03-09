import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {useNavigate} from 'react-router-dom';

import './style.css';
import { remove } from '../../../store/cartSlice';

export default function ProductDetails() {

  const [data, setData] = useState([]);

  console.log(data)

  const { id } = useParams();

  const histry = useNavigate()

  const dispatcher = useDispatch()

  console.log(id);

  const getItems = useSelector((state) => state.cart);
  console.log(getItems);

  const camapare = () => {
    let campareData = getItems.filter((val) => {
      return val.id == id;
    });
    console.log(campareData);
    setData(campareData)
  };

  useEffect(() => {
    camapare();
  }, [id]);


  const RemoveItems = (id) =>{
    dispatcher(remove(id))
    histry("/")
      
  }

  return (
    <>
      <section className="product_details">
        <h1>Items Details pages </h1>

        <div className="itemsProduct">
          {
          data.map((val) => {
            return (
              <>
                <div className="itemImage">
                  <img src={val.image} alt="sd" />
                </div>
                <div className="itemeDetails">
                  <h3>{val.title}</h3>
                  <span>{val.price}</span>
                  <p><i class="fa-solid fa-trash" onClick={() => RemoveItems(val.id)}></i></p>
                  
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
