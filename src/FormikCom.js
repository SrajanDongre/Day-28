import React from "react";
import {useFormik } from "formik";
import "./App.css";
export default function FormikCom() {
    const validate = values=>{
        let errors = {};
          if (!values.name) {
            errors.name = "Product Name is Required";
          } else if (values.name.length > 20) {
            errors.name = "Product Name is invaid";
          }
          if (!values.rating <0 && !values.rating >5){
            errors.rating = "Invalid Rating"
          }
          console.log(errors)

          return errors;
    };
    let initialValues ={
          name: "",
          price: "",
          rating: 0,
          description: "",
          manufacture: ""
    }
    const formik= useFormik({
        initialValues,         
        validate,
        onSubmit:(values) => {
            console.log(values);
        }
    });
    const {errors, values, handleChange, handleSubmit}= formik
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
              <label>Product Name</label>
              <br/>
              <br/>
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              <span className='err'>
                <br/>
                {errors.name ? errors.name : ""}
              </span>
              <br />
              <br/>
              <label>Rating</label>
              <br/>
              <br/>
              <input
                type="number"
                value={values.rating}
                name="rating"
                onChange={handleChange}
              />
              <span className="err">
                <br/>
                {errors.rating ? errors.rating : ""}
              </span>
              <br />
              <br/>
              <label>Price</label>
              <br/>
              <br/>
              <input
                type="number"
                value={values.price}
                name="price"
                onChange={handleChange}
              />
              <br />
              <br/>
              <label>Description</label>
              <br/>
              <br/>
              <input
                type="text"
                value={values.description}
                name="description"
                onChange={handleChange}
              />
              <br />
              <br/>
              <label>Manufacturing Date</label>
              <br/>
              <br/>
              <input
                type="date"
                value={values.manufacture}
                name="manufacture"
                onChange={handleChange}
              />
              <br />
              <br/>
              <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    )
    }