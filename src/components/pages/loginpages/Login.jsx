import React from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <section className="login">
        <div>
          <label htmlFor="">UserName</label>
          <input type="text" placeholder="Enter Your username" />
        </div>
        <div>
          <label htmlFor="">yourpassword</label>
          <input type="text" placeholder="Enter Your userpassword" />
        </div>
         <button>Submit</button>

      </section>
    </>
  );
}
