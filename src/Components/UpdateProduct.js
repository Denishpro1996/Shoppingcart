import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
const UpdateProduct = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log("location",location)
  // console.log(location.state.data._id)
  const [fields, setFields] = useState({
    name: location.state.data.name,
    price: location.state.data.price,
    category: location.state.data.category,
    companyId: location.state.data.companyId,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFields((oldvalues) => {
      return {
        ...oldvalues,
        [name]: value
      }
    })
  }

  const submitHandler = async () => {

    // console.log("idieesss",location.state.data._id)
    let result = await fetch (`http://localhost:5000/update/${location.state.data._id}`,{
      method:"Put",
      body: JSON.stringify(fields),
      headers:{
        "Content-Type":"application/json"
      }
    });
    result = await result.json();
    console.log(result)
    navigate('/')
  }


  return (
    <div className="products_container">
      <h1>Update Product</h1>
      <div className="form_container">
        <input type="text"
          placeholder="Name Of product"
          onChange={changeHandler}
          value={fields.name}
          name="name"
          className="form_input"
        />
        <input type="text"
          placeholder="Price Of Product"
          onChange={changeHandler}
          className="form_input"
          value={fields.price}
          name="price"
        />
        <input type="text"
          placeholder="Category"
          onChange={changeHandler}
          className="form_input"
          value={fields.category}
          name="category"
        />
        <input type="text"
          placeholder="Company"
          onChange={changeHandler}
          className="form_input"
          value={fields.companyId}
          name="companyId"
        />
        <button className="form_btn" onClick={submitHandler}>Update Products</button>
      </div>
    </div>
  )

}
export default UpdateProduct;
