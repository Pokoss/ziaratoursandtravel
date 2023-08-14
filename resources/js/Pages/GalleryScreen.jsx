import React from 'react'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

function GalleryScreen() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Our Gallery</h2>
        </div>
       <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
        </div>
      </div>
      <div className="flex w-1/3 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
        </div>
      </div>
    </div>
  </div>
      <Footer/>
    </div>
  )
}

export default GalleryScreen