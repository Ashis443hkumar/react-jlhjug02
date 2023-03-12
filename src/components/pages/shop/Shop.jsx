import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import ShopData from '../../dataStore/ShopData';
import Shop from "../../dataStore/Shop"

import "./style.css"
import { useDispatch } from 'react-redux';
import { add } from '../../../store/cartSlice';

export default function Shop() {

  const [data, setData] = useState(Shop);

  const dispatch = useDispatch();


  const filterData = (cateItem) => {
    const gilirtdATA = Shop.filter((currItem) => {
      return currItem.categoery === cateItem;
    });
    setData(gilirtdATA);
  };

  const handlerAddToCart = (val)=>{
    dispatch(add(val))
  }


  return (
    <>

{/* shop hero  */}

      <section className="my-5 shop_hero" >
        <Row className="gx-1">
          <Col lg="5" md="6" className="mx-0">
            <img
              src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-100 h-100"
            />
          </Col>
          <Col lg="7" md="6">
            <Row className="gx-1">
              <Col lg="6" md="6" sm="12" className="md-mt-2" md="6">
                <img
                  src="https://images.pexels.com/photos/763146/pexels-photo-763146.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-100"
                />
              </Col>
              <Col lg="6" md="6" sm="12" className="md-mt-2">
                <img
                  src="https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-100 h-100"
                />
              </Col>
              <Col lg="6" md="6" sm="12" className="mt-2" className="mt-2">
                <img
                  src="https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-100 h-100"
                />
              </Col>
              <Col lg="6" md="6" sm="12" className="mt-2" className="mt-2">
                <img
                  src="https://images.pexels.com/photos/763146/pexels-photo-763146.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-100"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

{/* shop About Fitlter  */}
      <section className="my-4 shop_filter">
          <Row>
            <Col lg="3" className="bg-warning text-center">
              <Row className="text-center"> 
                <Col lg="10">
                <h2> filter </h2>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>filterData('Phone')} >
               Mobile Phone 
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>filterData('ChairSofa')}>
                Sofachair
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>setData(Shop)}>
                All products
              </button>

              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa Bed
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0 mb-3">
                Sofa Leaving
              </button>
             </Col>
             <Col lg="10">
                <h2> filter Color </h2>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>filterData('Phone') } >
               Read Color 
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>filterData('ChairSofa')}>
                Black Color
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0" onClick={() =>setData(Shop)}>
                Yellow Color
              </button>
                </Col>
              </Row>
            </Col>
            <Col lg="9" className="bg-primary">
              <Row>
                {data.map((val) => (
                  <Col lg="3" className=""> 
                  <div className="cco">
                  <img src={val.image} alt="" className="" />
                    <div className="">
                      <h4>{val.title}</h4>
                      <p>{val.title}</p>
                      <button class="px-4 py-1" onClick={() => handlerAddToCart(val)} >Add To Cart</button>
                    </div>
                  </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        
      </section>
    </>
  );
}
