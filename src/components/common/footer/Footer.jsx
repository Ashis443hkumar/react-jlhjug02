import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import './footer.css';
import Scroll from '../scroll/Scroll'

export default function Footer() {
  return (
    <>
    <section id="footer">
      <Container>
        <Row>
          <Col class="col-lg-3 col-md-6 footer-contact">
            <h3>Company</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </Col>

          <Col class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{' '}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{' '}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </Col>

          <Col class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{' '}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{' '}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>{' '}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </Col>

          <Col class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </Col>
        </Row>
      </Container>
      </section>

      {/* tofooter  */}

      <div class="tfooter" id="tfooter">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            © Copyright{' '}
            <strong>
              <span>Company</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i class="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-youtube"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </div>
      </div>
      
      <Scroll/>
    </>
  );
}
