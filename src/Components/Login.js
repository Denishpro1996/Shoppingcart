import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginname, loginsetName] = useState({
    email: "",
    password: "",
  });
  useEffect(()=>{
    const auth = localStorage.getItem("user")
    if(auth){
      navigate('/')
    }
  },[])
  const navigate = useNavigate()
  const changeChanler = (e) => {
    const {name,value} = e.target;
    loginsetName((oldValue) => {
      return {
        ...oldValue,
        [name]: value,
      }
    })
  };
  const submithandler = async(e) => {
    e.preventDefault();


    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(loginname),
      headers: {
        "content-type": "application/json",
      },
    });

    result = await result.json();
    console.log(result)

    if(result.auth){
       localStorage.setItem("user",JSON.stringify(result.user));
       localStorage.setItem("token",JSON.stringify(result.auth));
       navigate("/")
    }else{
      console.log("Authentication Required ")
     }
  };
  return (
    <div className="login_page_container">
      <div className="login_subcontainer">
        <div className="img_container">
          <h1>Happy To WelCome You</h1>
          <img
            src="https://florafountain.com/wp-content/uploads/2019/07/ff-about-banner-bg.png"
            alt=""
          />
        </div>

        <div className="form_container">
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={changeChanler}
            value={loginname.email}
            name="email"
            autoComplete="off"
            autoCorrect="off"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={changeChanler}
            value={loginname.password}
            name="password"
            autoComplete="off"
          />

          <button className="_frm_btn" onClick={submithandler}>
            Log In
          </button>
          <h4>OR</h4>
          <button className="_frm_otp">Request OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
