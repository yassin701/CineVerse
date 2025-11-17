import React from 'react'
import hero from '../image/image_Home.jpeg'
import slide1 from '../image/slide1.png'
import slide2 from '../image/slide2.png'
import slide3 from '../image/slide3.png'
import slide4 from '../image/slide4.png'

const slides = [slide1, slide2, slide3, slide4, slide4, slide4, slide4, slide4, slide4, slide4];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-banner">
        <img src={hero} alt="Hero Banner" className="hero-img" />
      </div>

      {/* MOVIES ROW */}
      <div className="movies-row">
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`slide${index + 1}`} className="movie-card" />
        ))}
      </div>
    </>
  )
}
