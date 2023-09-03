import React, { useState } from 'react'
import ambu from '../images/ambulance.jpg'

export default function FindAmbulance() {

  const [available,setAvailable]=useState(false)

  const ambulance=[
    {
      ownerName: "Square Hospital",
      img: ambu,
      available: "24/7 Available",
      model: "TOYOTA Hi-Ace",
      rating: 4,
      location: "Dhanmondi",
      mobile:'01722222222'
    },
    {
      ownerName: "Square Hospital",
      img: ambu,
      available: "24/7 Available",
      model: "TOYOTA Hi-Ace",
      rating: 4,
      location: "Dhanmondi",
      mobile:'01722222222'
    },
    {
      ownerName: "Square Hospital",
      img: ambu,
      available: "24/7 Available",
      model: "TOYOTA Hi-Ace",
      rating: 4,
      location: "Mohakhali",
      mobile:'01722222222'
    },
  ]

  const handleSubmit=(e)=>{
    e.preventDefault()
    setAvailable(true)
  }
  return (
    <div>
      <section class="section section-search">
        <div class="container-fluid">
          <div class="banner-wrapper">
            <div class="banner-header text-center">
              <h1>Search Ambulance in Your area</h1>
              <p>Discover the best ambulance service from the best hospitals</p>
            </div>
            <div class="search-box">
              <form onSubmit={handleSubmit}>
                <div class="form-group" style={{width:'100%'}}>
                  <input type="text" class="form-control" placeholder="Give a location here...." required/>
                  <span class="form-text">Ex : Mohakhali, Dhanmondi , Banani </span>
                </div>
                <button type="submit" class="btn btn-primary search-btn ml-2"><i class="fas fa-search"></i> <span>Search</span></button>
              </form>
            </div>
            
            
          </div>
        </div>
      </section>
      <div className='container'>
       { available===false && <h2 style={{color:'red',height:'60vh'}} className='mt-5 ml-5'>No ambulance found.Give the location correctly and search again.</h2>}

       {available===true && <div className='mt-3'>
        { ambulance.map(info=>(<div class="card ">
              <div class="card-body">
                <div class="doctor-widget">
                  <div class="doc-info-left">
                    <div class="">
                        <img src={ambu} class="img-fluid" style={{width:'350px',marginRight:'20px'}} alt="ambuimg"/>
                    </div>
                    <div class="doc-info-cont">
                      <h2 class="">{info.ownerName}</h2>
                      <p class="doc-speciality">{info.available}</p>
                      <h5 class="doc-name">Vehicle Type: {info.model}</h5>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      </div>
                  </div>
                  <div class="doc-info-right">
                    <div class="clini-infos">
                      <ul>
                        <li><i class="fas fa-map-marker-alt"></i> {info.location}</li>
                        <li><i class="far fa-money-bill-alt"></i> Tk: 1500-2000</li>
                        <li>Call: {info.mobile}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>))}
        </div>}

      </div>
    </div>
  )
}
