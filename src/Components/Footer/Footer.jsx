import React from "react";
import stsyels from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container pt-5">
          <div className=" d-flex justify-content-between pt-5 pb-3 ">
            <div>
              <h4 className="my-2">E-comm</h4>
              <p className=" text-muted">
                Lorem ipsum dolor sit amet consectetur, <br />
                adipisicing elit. Atque, odio? Consectetur <br /> Consectetur
                quasi
              </p>
            </div>
            <div>
              <h4 className="my-2">Follow US</h4>
              <p className=" text-muted">
                Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
                Atque, <br />
                <i class="fa-brands fa-facebook mx-2 text-black "></i>
                <i class="fa-brands fa-twitter text-info mx-1 "></i>
              </p>
            </div>
            <div>
              <h4 className="my-2">About Us</h4>
              <p className=" text-muted">
                E-comm,4589 <br />
                marmora road <br />
                Glasgow D04 59GR
              </p>
            </div>
          </div>
          <div className=" d-flex justify-content-between text-muted pb-2 pt-5">
            <div>
              <h5 className="py-3">Information</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>information</li>
                <li>Privacy Policy</li>
                <li>Term & conditions</li>
              </ul>
            </div>
            <div>
              <h5 className="py-3">Service</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>information</li>
                <li>Privacy Policy</li>
                <li>Term & conditions</li>
              </ul>
            </div>
            <div>
              <h5 className="py-3">My Account</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>information</li>
                <li>Privacy Policy</li>
                <li>Term & conditions</li>
              </ul>
            </div>
            <div>
              <h5 className="py-3">Our Offers</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>information</li>
                <li>Privacy Policy</li>
                <li>Term & conditions</li>
              </ul>
            </div>
          </div>
          <hr className="text-white border-2" />
          <div className="py-3  d-flex justify-content-between">
            <div>
              <p className="text-white pt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className=" text-warning fs-3">
              <i class="fa-brands fa-cc-discover "></i>
              <i class="fa-brands fa-cc-mastercard mx-2"></i>
              <i class="fa-brands fa-cc-paypal"></i>
              <i class="fa-brands fa-cc-visa mx-2"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
