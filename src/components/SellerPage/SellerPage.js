import React, { useState } from "react";
import "./seller.css";

export const SellerPage = () => {
    const[formData, setValue] =useState({
        house_features:'',
        url1:'',
        url2:'',
        url3:'',
        url4:'',
        url5:'',
        location:'',
        number_of_rooms:'',
        price:'',
        category:'',
        description:''
    })
    function handleSubmit(e){
        e.preventDefault();
        fetch('/properties',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body:JSON.stringify(formData)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
          let form = document.querySelector('form');
          let p = document.createElement('p');
            document.getElementById('ct').appendChild(p);
            p.style.fontFamily="Lato,Helvetica,Arial,sans-serif";
            p.style.fontSize="40px"
            p.style.textAlign="center"
            p.style.marginTop="40px"
            p.style.color="#F18F01"
            p.innerText="Your property has been uploaded!!!."
            document.querySelector('.auth-form-container').querySelector('h2').remove();
            form.remove();
    }
    function handleChange(e){
        setValue((previouState)=>{
             return {...previouState, [e.target.id]:e.target.value}
        })
    }
    console.log(formData)
  return (
    <div className="auth-form-container" id='ct'>
      <h1>Seller Page</h1>
      <form onSubmit={handleSubmit}>
        <div class="register-form">
          <label className="label" htmlFor="house_features">House Features</label>
          <input className="same_size"
            value={formData.house_features}
            name="House_features"
            onChange={handleChange}
            id="house_features"
            placeholder="Enter house features"
            required
          />
          
          <div className="display-cont">
            <div className="ct1">
              <div>
          <label className="label" htmlFor="url1">Image url 1</label>
          <input
            value={formData.url1}
            name="Image_url_1"
            onChange={handleChange}
            id="url1"
            placeholder="Enter image url 1"
            required
          />
          </div>
          <div >
          <label className="label" htmlFor="url2">Image url 2</label>
          <input
             value={formData.url2}
             name="Image_url_2"
             onChange={handleChange}
             id="url2"
             placeholder="Enter image url 2"
             required
          />
          </div>
          </div>

          <div className="ct2">
            <div>
          <label className="label" htmlFor="url3">Image url 3</label>
          <input
            value={formData.url3}
            name="Image_url_3"
            onChange={handleChange}
            id="url3"
            placeholder="Enter image url 3"
            required
          />
          </div>
          <div>
          <label className="label" htmlFor="url4">Image url 4</label>
          <input
          value={formData.url4}
          name="Image_url_4"
          onChange={handleChange}
          id="url4"
          placeholder="Enter image url 4"
          required
          />
          </div>
          </div>

          <div className="ct3">
            <div>
          <label className="label" htmlFor="url5">Image url 5</label>
          <input 
            value={formData.url5}
            name="Image_url_5"
            onChange={handleChange}
            id="url5"
            placeholder="Enter image url 5"
            required
          />
          </div>
          </div>

          <div className="ct4">
            <div>
          <label className="label" htmlFor="location">Location</label>
          <input
            value={formData.location}
            name="Location"
            onChange={handleChange}
            id="location"
            placeholder="Enter location"
            required
          />
          </div>
          <div className="ct6">
          <label className="label" htmlFor="number_of_rooms">Number of Rooms</label>
          <input 
             value={formData.number_of_rooms}
             name="Number_of_rooms"
             onChange={handleChange}
             id="number_of_rooms"
             placeholder="Enter number of rooms"
             required
          />
          </div>
          </div>

          <div className="ct5">
            <div>
          <label className="label" htmlFor="price">Price</label>
          <input
             value={formData.price}
             name="Price"
             onChange={handleChange}
             id="price"
             placeholder="Enter price"
             required
          />
          </div>
          <div>
          <label className="label" htmlFor="category">Category</label>
          <input
           value={formData.category}
           name="Category"
           onChange={handleChange}
           id="category"
           placeholder="Enter category"
           required
          />
          </div>
          </div>
          </div>

          
          
          <label className="label" htmlFor="description">Description</label>
          <textarea            
          className="texta1" 
          rows="10"
          value={formData.description}
          name="Description"
          onChange={handleChange}
          id="description"
          placeholder="Enter description"
          required
          >
          </textarea>
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default SellerPage;