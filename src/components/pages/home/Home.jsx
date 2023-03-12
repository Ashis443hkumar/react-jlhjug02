import React from "react";
import './home.css'
import Hero from "../../common/hero/Hero";
import HomeService from "./HomeService";
import NewAriable from "./NewAriable";
import Clock from "../../ui/Clock";
import { Container,Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeService/>
      <NewAriable subtitle="New Arrials Products" />
      {/* <Clock/> */}

      <section className="time_count">
        <Container>
          <Row> 
            <Col lg='6' md="6" className=''>
              <div className="clock_content">
                <h4 className="text-white fs-6 mb-2">Limited Offers </h4>
                <h3 className="text-white fs-6 mb-3">Quality Armchair</h3>
              </div>
                 <Clock/>
                <button className="btn_store shop__btn">
                  <Link>Visit Store</Link>
                </button>
            </Col>
            <Col lg='6' md="6" className=''>
              <div className="clock-img">
               <img src="https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=eWOYtEpcDKw-XLUQX13-K7c5jn_S8hbeWaZC_r4nrtg=" alt="" />
               </div>
           </Col>
          </Row>
        </Container>
      </section>

      <NewAriable subtitle="Best Offers Deals" className="mb-3" />
      <NewAriable subtitle="Holi Offers Deals" className="mt-4" />



    </div>


  );
}
