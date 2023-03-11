import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Data from "../../dataStore/Data"

export default function Shop() {

  const[data, setData] =useState(Data)

  const filterData = (cateItem) =>{
    const gilirtdATA = data.filter((currItem) =>{
      return currItem.categoery === cateItem
    })
    setData(gilirtdATA)

  }

  return (
    <>
      <Container className="my-5">
        <Row className="gx-1">
          <Col lg="5" md="6" className="mx-0">
            <img
              src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600"
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
      </Container>

      <section className="">
        <Container>
          <Row>
            <Col lg="3" className="bg-warning text-center">
              <h2> filter </h2>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0">
                Sofa
              </button>
              <button className="bg-secondary text-white py-2 col-md-10 mt-2 border-0 mb-3">
                Sofa
              </button>
            </Col>
            <Col lg="9" className="bg-primary">
              <Row>
                {
                  data.map((val) =>(
                    <Col lg="3">
                      <img src="" alt="" />
                      <div className="">
                        <h3>{val.title}</h3>
                        <p>{val.title}</p>
                        <button>Cart</button>
                      </div>
                    </Col>
                    
                  ))
                }
                <Col lg="3">5</Col>
                <Col lg="3">7</Col>
                <Col lg="3">9</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
