import React from "react";
import './contact.css'
export default function Contact() {
  return (
    <div>
      <div className="heading">
         <h1>Contact Pages</h1>   
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0738328779403!2d77.27630046508246!3d28.627549182419767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35319b6a7ff%3A0x127dca80423ad527!2sLaxmi%20Nagar%2C%20Block%20S1%2C%20Nanakpura%2C%20Shakarpur%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1670249070320!5m2!1sen!2sin" width="100%" height="450" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='from'>
          <div className='userinfo'>
            <input type="text" placeHolder="user name" />
            <input type="text" placeHolder="Email Address" />
          </div>
          <textarea name="" id="" cols="65" rows="10"></textarea>

        <button className='sendbtn'>Send</button>
      </div>
    </div>
  );
}
