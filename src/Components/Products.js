import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {


  const [product, setProduct] = useState([]);

  let getProduct = async () => {
    let result = await fetch("http://localhost:5000/product",{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json();
    setProduct(result)
  }
  useEffect(() => {
    getProduct()
  }, []);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/delete/${id}`,{
      method:"Delete",
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      
    })
    result = await result.json();
    if(result){
      getProduct();
    }
  }

  const searchHandler=async(e)=>{
     let  key = e.target.value
     if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      result = await result.json()
      if(result){
        setProduct(result)
      }else{
        getProduct()
      }
     }

  }

  return (
    <div className="product">
      <div className="product_table">
        <input type="search" className="searchbar" placeholder="Search Item..."  onChange={searchHandler}/>
        <h1>Product List</h1>
        <ul>

          <li>S.No</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Delete</li>
        </ul>
        {product.map((item, index) => {
          return (
            <ul key={index}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li className="btns">
                <button onClick={() => deleteProduct(item._id)}>Del</button> 
                <Link to="/update" state={{data:item}}>
                <button >Update</button>
                </Link>
              </li>
            </ul>
          )
        })}
      </div>



    </div>
  );
};
export default Products;
