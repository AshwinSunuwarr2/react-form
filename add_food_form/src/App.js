import React, { useState } from 'react'
import "../src/components/appfood.css"

import {db, storage} from "./Firebase/FoodappConfig";
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function App() {
  const [foodName, setFoodName] = useState('')
  const [foodImage, setFoodImage] = useState(null)
  const [foodPrice, setFoodPrice] = useState('')
  const [foodDes, setFoodDes] = useState('')
  const [foodCategory, setFoodCategory] = useState('')
  const [foodType, setFoodType] = useState('')
  const [addonName, setAddonName] = useState('')
  const [addonPrice, setAddonPrice] = useState('')
  const [restName, setRestName] = useState('')
  const [restPhone, setRestPhone] = useState('')
  const [restBuilding, setRestBuilding] = useState('')
  const [restArea, setRestArea] = useState('')
  const [restCity, setRestCity] = useState('')
  const [restMail, setRestMail] = useState('')
  const [restDistrict, setRestDistrict] = useState('')

  const [foodImageUrl, setFoodImageUrl] = useState('')
  
  
  const submitFood = (e)=>{
    e.preventDefault()

    if (foodImage===null){
      alert("Please insert an image.")
      return
    }

    else {
      const imageRef = ref(storage, `FoodImages/${foodImage.name}`)
      uploadBytes(imageRef, foodImage)
      .then(()=>{
        alert("Image added successfully.")
        getDownloadURL(imageRef)
        .then((url) => {
          const foodData = {
            foodName,
            foodImageUrl: url,
            foodPrice,
            foodDes,
            foodCategory,
            foodType,
            addonName,
            addonPrice,
            restName,
            restBuilding,
            restArea,
            restPhone,
            restCity,
            restDistrict,
            restMail
          }
          try{
            const docRef = addDoc(collection(db, "FoodData"), foodData)
            alert("Data added successfully", docRef.id)
          }
          catch(error){
            alert(error.message)
          }
        })
      })
      .catch((error) => {
        alert(error.message)
      })      
    }

    
  }
  return (
    <div className='outer-form'>
      <h1>Enter food details:</h1>

        <form className='inner-form'>
          <label>Food Name</label>
          <input type="text" name='food_name' onChange={(e)=>{setFoodName(e.target.value)}}/>

          <label>Food Description</label>
          <input type="text" name='food_description' onChange={(e)=>{setFoodDes(e.target.value)}}/>

          <label>Food Image</label>
          <input type="file" name='food_image' onChange={(e)=>{setFoodImage(e.target.files[0])}}/>

          <label>Food Price</label>
          <input type="number" name='food_price' onChange={(e)=>{setFoodPrice(e.target.value)}}/>

          <div className='form-row'>
            <div className='form-col'>
              <label>Food Category</label>
              <select name='food_category'  onChange={(e)=>{setFoodCategory(e.target.value)}}>
                <option value="Nepali">Nepali</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinsese</option>
                <option value="Japanese">Japanese</option>
                <option value="Cultural">Cultural</option>
              </select>
            </div>
            <div className='form-col'>
              <label>Food Type</label>
              <select name='food_type' onChange={(e)=>{setFoodType(e.target.value)}}>
              <option value="Veg">Veg</option>
              <option value="Non-veg">Non-veg</option>
              </select>
            </div>
          </div>


          <div className='form-row'>
            <div className='form-col'>
              <label>Add On Name</label>
              <input type="text" name='addon_name'  onChange={(e)=>{setAddonName(e.target.value)}}/>
            </div>
            <div className='form-col'>
              <label>Add on Price</label>
              <input type="text" name='addon_price'  onChange={(e)=>{setAddonPrice(e.target.value)}}/>
            </div>
          </div>

          <label>Restaurant Name</label>
          <input type="text" name='rest_name'  onChange={(e)=>{setRestName(e.target.value)}}/>


          <div className='form-row'>
            <div className='form-col'>
              <label>Restaurant Building Name / Number</label>
              <input type="text" name='rest_building' onChange={(e)=>{setRestBuilding(e.target.value)}}/>
            </div>
            <div className='form-col'>
              <label>Restaurant Area/Street Name</label>
              <input type="text" name='rest_area' onChange={(e)=>{setRestArea(e.target.value)}}/>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-col'>
              <label>Restaurant City</label>
              <input type="text" name='rest_city' onChange={(e)=>{setRestCity(e.target.value)}}/>
            </div>
            <div className='form-col'>
              <label>Restaurant District</label>
              <input type="text" name='rest_district' onChange={(e)=>{setRestDistrict(e.target.value)}}/>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-col'>
              <label>Restaurant Phone</label>
              <input type="number" name='rest_phone' onChange={(e)=>{setRestPhone(e.target.value)}}/>
            </div>
            <div className='form-col'>
              <label>Restaurant Email</label>
              <input type="email" name='rest_mail' onChange={(e)=>{setRestMail(e.target.value)}}/>
            </div>
          </div>

          <button onClick={submitFood}>Add food</button>
        </form>
      </div>
  )
}

export default App