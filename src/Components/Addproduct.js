import React from "react";
import { useState } from "react";
const Addproduct = () => {
  const [fields, setFields] = useState({
    name: "",
    price: "",
    category: "",
    companyId: "",

  });
  // const [error, setError] = useState(false)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFields((oldvalues) => {
      return {
        ...oldvalues,
        [name]: value
      }
    })
  }

  const submitHandler = async (e) => {
    console.log(fields)
    setFields({
      name: "",
      price: "",
      category: "",
      companyId: "",
    })

    // if (!fields.name || !fields.price || fields.category || fields.companyId) {
    //   setError(true);
    //   return false;
    // }

    const _id = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify(fields, _id),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json();
    console.log(result);
  }
  return (
    <div className="products_container">
      <div className="image_container">
        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-product-sourcing.jpg?v=1598457732&width=1024" alt="" />
      </div>
      <div className="form_container">
        <input type="text"
          placeholder="Name Of product"
          onChange={changeHandler}
          value={fields.name}
          name="name"
          className="form_input"
        />
        {/* {
        error && !fields.name ?<span className="error_span">It Can't be Empty!!!!</span> :null
      } */}

        <input type="text"
          placeholder="Price Of Product"
          onChange={changeHandler}
          className="form_input"
          value={fields.price}
          name="price"
        />
        {/* {
        error && !fields.price ? <span className="error_span">It Can't be Empty!!!!</span>:null
      } */}

        <input type="text"
          placeholder="Category"
          onChange={changeHandler}
          className="form_input"
          value={fields.category}
          name="category"
        />
        {/* {
        error && !fields.category ?  <span className="error_span">It Can't be Empty!!!!</span>:null
      } */}

        <input type="text"
          placeholder="Company"
          onChange={changeHandler}
          className="form_input"
          value={fields.companyId}
          name="companyId"
        />
        {/* {
        error && !fields.companyId ?  <span className="error_span">It Can't be Empty!!!!</span>:null
      } */}

        <button className="form_btn" onClick={submitHandler}>Add Products</button>
      </div>
    </div>
  )
}

export default Addproduct;
