import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [fname, setName] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setName((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setName({
      name: "",
      email: "",
      password: "",
    });
    console.log("name", fname);

    // fetch APi
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(fname),
      headers: {
        "content-type": "application/json",
      },
    });
    // .then((response) => response.json())
    // .then((result) => {
    //   alert(result.message);
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/login");
    }
  };

  return (
    <div className="signup_container">
      {/* <div className='subContainer'> */}
      <div className="addcontainer">
        <img
          src="https://www.globalsign.com/application/files/7416/1463/0119/iStock-1152537185.jpg"
          alt=""
        />
      </div>

      <div className="registration_form" onSubmit={submitHandler}>
        <form action="" className="signup_form">
          <input
            className="form_input"
            value={fname.name}
            name="name"
            onChange={changeHandler}
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="form_input"
            value={fname.email}
            name="email"
            type="text"
            onChange={changeHandler}
            placeholder="Enter Email"
          />
          <input
            className="form_input"
            value={fname.password}
            name="password"
            type="text"
            onChange={changeHandler}
            placeholder="Enter Password"
          />
          <button className="form_btn" type="submit">
            Signup
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Signup;
